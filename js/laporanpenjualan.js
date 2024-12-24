// Data penjualan mobil dari 5 tahun terakhir
const labels = ["2019", "2020", "2021", "2022", "2023"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Penjualan Mobil",
      data: [120, 150, 180, 200, 250], // Data penjualan
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)", // Warna untuk tahun 2019
        "rgba(54, 162, 235, 0.5)", // Warna untuk tahun 2020
        "rgba(255, 206, 86, 0.5)", // Warna untuk tahun 2021
        "rgba(75, 192, 192, 0.5)", // Warna untuk tahun 2022
        "rgba(153, 102, 255, 0.5)", // Warna untuk tahun 2023
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// Konfigurasi diagram
const config = {
  type: "bar", // Jenis diagram: bar (batang)
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Penjualan Mobil per Tahun",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// Render chart
const salesChart = new Chart(document.getElementById("salesChart"), config);

// Data penjualan per bulan untuk tahun 2023
const monthlySales2023 = {
  January: 20,
  February: 22,
  March: 18,
  April: 25,
  May: 28,
  June: 30,
  July: 20,
  August: 25,
  September: 22,
  October: 24,
  November: 28,
  December: 28,
};

// Harga rata-rata mobil (Rp)
const carPrice = 300_000_000; // Bisa diubah sesuai kebutuhan

// Masukkan data ke dalam tabel
const tableBody = document.querySelector("#salesTable tbody");
Object.keys(monthlySales2023).forEach((month) => {
  const sales = monthlySales2023[month];
  const revenue = sales * carPrice; // Penghasilan = Jumlah penjualan x Harga mobil
  const row = document.createElement("tr");
  row.innerHTML = `
        <td>${month}</td>
        <td>${sales}</td>
        <td>${revenue.toLocaleString("id-ID")}</td>
    `;
  tableBody.appendChild(row);
});
