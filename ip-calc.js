function ipToLong(ip) {
    return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
}

function longToIp(long) {
    return [
        (long >>> 24) & 0xff,
        (long >>> 16) & 0xff,
        (long >>> 8) & 0xff,
        long & 0xff
    ].join('.');
}

function getBinary(long) {
    return long.toString(2).padStart(32, '0').match(/.{8}/g).join('.');
}

function getHex(ip) {
    return ip.split('.').map(octet => parseInt(octet, 10).toString(16).toUpperCase().padStart(2, '0')).join('.');
}

function copyValue(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
        const el = document.querySelector(`span[onclick="copyValue('${id}')"]`);
        const original = el.innerText;
        el.innerText = "Done!";
        el.style.color = "var(--primary)";
        setTimeout(() => {
            el.innerText = original;
            el.style.color = "";
        }, 1000);
    });
}

function copyValueText(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Find all elements with this text and update them briefly for feedback
        const icons = document.querySelectorAll(`span[onclick="copyValueText('${text}')"]`);
        icons.forEach(icon => {
            const original = icon.innerText;
            icon.innerText = "Done!";
            setTimeout(() => { icon.innerText = original; }, 1000);
        });
    });
}

function getInsight(cidr) {
    const lang = localStorage.getItem('selectedLang') || 'en';
    const insights = {
        en: {
            p2p: "Ideal for Point-to-Point links (Router-to-Router).",
            host: "Single Host address (Loopback).",
            standard: "Standard size for small to medium local networks.",
            large: "Large enterprise-scale network segment.",
            backbone: "Backbone or Core network infrastructure block."
        },
        th: {
            p2p: "เหมาะสำหรับเชื่อมต่อระหว่าง Router (Point-to-Point)",
            host: "ที่อยู่สำหรับเครื่องเดียว (Loopback)",
            standard: "ขนาดมาตรฐานสำหรับเครือข่ายภายในบ้านหรือออฟฟิศขนาดกลาง",
            large: "เซกเมนต์เครือข่ายขนาดใหญ่ระดับองค์กร",
            backbone: "บล็อกโครงสร้างพื้นฐานเครือข่ายหลัก (Backbone)"
        }
    };

    if (cidr >= 30) return insights[lang].p2p;
    if (cidr === 32) return insights[lang].host;
    if (cidr >= 24) return insights[lang].standard;
    if (cidr >= 16) return insights[lang].large;
    return insights[lang].backbone;
}

function calculate() {
    const ipInput = document.getElementById('ip-address').value;
    const cidr = parseInt(document.getElementById('cidr-range').value);
    
    // CIDR to Mask
    const maskLong = cidr === 0 ? 0 : (~0 << (32 - cidr)) >>> 0;
    const wildcardLong = ~maskLong >>> 0;
    
    document.getElementById('cidr-display').innerText = `/${cidr}`;
    document.getElementById('mask-display').value = longToIp(maskLong);
    document.getElementById('wildcard-addr').innerText = longToIp(wildcardLong);

    // Validate IP
    const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!ipPattern.test(ipInput)) return;

    const ipLong = ipToLong(ipInput);
    const netLong = (ipLong & maskLong) >>> 0;
    const broadLong = (netLong | ~maskLong) >>> 0;
    
    const hosts = cidr >= 31 ? 0 : (Math.pow(2, 32 - cidr) - 2);

    // Update Display
    document.getElementById('net-addr').innerText = longToIp(netLong);
    document.getElementById('net-bin').innerText = getBinary(netLong);
    document.getElementById('broad-addr').innerText = longToIp(broadLong);
    document.getElementById('broad-bin').innerText = getBinary(broadLong);
    document.getElementById('hex-addr').innerText = getHex(ipInput);

    if (cidr <= 30) {
        document.getElementById('first-ip').innerText = longToIp(netLong + 1);
        document.getElementById('last-ip').innerText = longToIp(broadLong - 1);
        document.getElementById('total-hosts').innerText = hosts.toLocaleString();
    } else {
        document.getElementById('first-ip').innerText = "N/A";
        document.getElementById('last-ip').innerText = "N/A";
        document.getElementById('total-hosts').innerText = cidr === 31 ? "2 (P2P)" : "1 (Host)";
    }

    // IP Class
    const firstOctet = parseInt(ipInput.split('.')[0]);
    let ipClass = "C";
    if (firstOctet >= 1 && firstOctet <= 126) ipClass = "A";
    else if (firstOctet >= 128 && firstOctet <= 191) ipClass = "B";
    else if (firstOctet >= 192 && firstOctet <= 223) ipClass = "C";
    else if (firstOctet >= 224 && firstOctet <= 239) ipClass = "D";
    else if (firstOctet >= 240 && firstOctet <= 255) ipClass = "E";
    
    document.getElementById('ip-class').innerText = ipClass;

    // Type Badge
    const identityBox = document.getElementById('ip-identity-box');
    let type = "Public IP";
    let isPrivate = false;
    if (firstOctet === 10 || 
        (firstOctet === 172 && parseInt(ipInput.split('.')[1]) >= 16 && parseInt(ipInput.split('.')[1]) <= 31) ||
        (firstOctet === 192 && ipInput.split('.')[1] === '168')) {
        isPrivate = true;
        type = "Private IP";
    }
    identityBox.innerHTML = `<span class="badge-type ${isPrivate ? 'badge-private' : 'badge-public'}">${type}</span>`;

    // Insight
    document.getElementById('usage-description').innerText = getInsight(cidr);
}

// Event Listeners
document.getElementById('ip-address').addEventListener('input', calculate);
document.getElementById('cidr-range').addEventListener('input', calculate);

// Initial calc
calculate();
