function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    let studentName = document.getElementById('studentName').value;
    let contactNo = document.getElementById('contactNo').value;
    let seatNo = document.getElementById('seatNo').value;
    let hoursOpted = document.getElementById('hoursOpted').value;
    let feesPaid = document.getElementById('feesPaid').value;
    let remainingDues = document.getElementById('remainingDues').value;
    let monthPaid = document.getElementById('monthPaid').value;
    
    doc.setFontSize(18);
    doc.text("SANKALP LIBRARY", 75, 10);
    doc.setFontSize(12);
    doc.text("City complex, Near SBI BANK, Domchanch", 55, 20);
    doc.text("Contact: 7544032365, 9572939681", 65, 30);
    
    doc.line(10, 35, 200, 35);
    
    doc.setFontSize(14);
    doc.text("Receipt", 90, 45);
    doc.setFontSize(12);
    doc.text(`Student Name: ${studentName}`, 20, 60);
    doc.text(`Contact No.: ${contactNo}`, 20, 70);
    doc.text(`Seat No.: ${seatNo}`, 20, 80);
    doc.text(`Hours Opted: ${hoursOpted}`, 20, 90);
    doc.text(`Fees Paid: ₹${feesPaid}`, 20, 100);
    doc.text(`Remaining Dues: ₹${remainingDues}`, 20, 110);
    doc.text(`Month of Fee Paid: ${monthPaid}`, 20, 120);
    
    doc.line(10, 130, 200, 130);
    
    doc.text("Rohit Raj", 20, 140);
    doc.text("SANKALP LIBRARY", 20, 150);
    
    doc.save("receipt.pdf");
}
