function calculateElectricityCost() {
    // ดึงค่าจาก input
    const power = parseFloat(document.getElementById('power').value);
    const hoursPerDay = parseFloat(document.getElementById('hours').value);
    const days = parseFloat(document.getElementById('days').value);
    const unitCost = parseFloat(document.getElementById('unitCost').value);
  
    // ตรวจสอบว่าค่าต่าง ๆ ถูกป้อนครบ
    if (isNaN(power) || isNaN(hoursPerDay) || isNaN(days) || isNaN(unitCost)) {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }
  
    // คำนวณค่าไฟ
    const kWhPerDay = (power / 1000) * hoursPerDay;
    const totalKWh = kWhPerDay * days;
    const cost = totalKWh * unitCost;
  
    // แสดงผลลัพธ์
    document.getElementById('result').textContent = 'ค่าไฟทั้งหมด: '+cost.toFixed(2)+' บาท';
  }