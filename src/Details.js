// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
// import profile from "./assets/profile.jpg";
import logo1 from "./assets/Logo.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import nodejs from "./assets/techstack/nodejs.png";
import mysql from "./assets/techstack/mysql.png";
import php from "./assets/techstack/php.png";
import supabase from "./assets/techstack/supabase.png";
import nextjs from "./assets/techstack/nextjs.png";

// Porject Images
import belopaoutdoor from "./assets/projects/belopaoutdoor.png";
import berita from "./assets/projects/berita.png";
import surat from "./assets/projects/surat.png";
import decoration from "./assets/projects/decoration.png";
import learning from "./assets/projects/learning.png";
import smk5 from "./assets/projects/smk5.png";
// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Muhammad Zulkifli",
  img: logo1,
  about: `Saya lulusan baru Jurusan Informatika Universitas Cokroaminoto Palopo dengan minat yang besar di bidang pengembangan website dan manajemen produk. Saya berpengalaman mengerjakan dan mengembangkan proyek pembuatan situs web, baik projeck freelance maupun portofolio.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/muhammadzulkifli39/",
  github: "https://github.com/Zulkifli39",
  instagram: "https://www.instagram.com/muhzullkffly_/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Freelance Web Developer",
    Company: "Work From Home (WFH)",
    Location: "Palopo - Sulawesi Selatan",
    Type: "Freelance",
    Duration: "Maret 2025 - Sekarang",
    Detail: `- Mengembangkan berbagai aplikasi web sesuai kebutuhan klien, termasuk sistem perpustakaan SMP 1 Bua (Sulawesi Selatan) dan SMK 5 Luwu.
- Merancang dan mengembangkan situs web reservasi peralatan dekorasi (PWA) untuk UMKM OmProject Decoration.
- Merancang dan mengembangkan sistem penyewaan berbasis web responsif dengan integrasi WhatsApp untuk toko outdoor di Belopa, Sulawesi Selatan.
- Mengembangkan situs web pengajuan surat responsif di Desa Kalotok, Luwu Utara.
- Membangun dan mengembangkan aplikasi seluler dengan sistem antrean di kantor Badan Pengelolaan Keuangan dan Aset Kota Palopo.`,
  },
  {
    Position: "Web & Data Management",
    Company: "PT. Digital Desa Indonesia",
    Location: "Makassar - Sulawesi Selatan",
    Type: "Internship",
    Duration: "Agustus 2024 - September 2024",
    Detail: `- Berkontribusi dalam pemisahan data pada website Pemantauan Desa dan Kelurahan Terintegrasi (Pendekar) berdasarkan akses kabupaten dan kecamatan dengan kode slug API. 
- Memastikan situs web berfungsi dengan baik dan responsif di berbagai perangkat.
- Menganalisis data pengunjung situs web untuk meningkatkan pengalaman pengguna dan strategi pemasaran.
- Melakukan optimasi dan perbaikan tampilan berita serta peta pada website monitoring desa agar akurat dan konsisten.`,
  },
  {
    Position: "Frontend Developer",
    Company: "PT. Educa Sisfomedia Indonesia",
    Location: "Salatiga - Jawa Tengah (WFH)",
    Type: "Internship",
    Duration: "September 2021 - Desember 2021",
    Detail: `- Merancang UI dan membangun portal berita nasional menggunakan React.js dan Tailwind CSS.
- Berkolaborasi dengan tim backend dalam pengembangan API.`,
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Universitas Cokroaminoto Palopo",
    Company: "Teknik Informatika",
    Location: "Palopo - Sulawesi Selatan",
    Type: "Starata Satu (S1)",
    Duration: "September 2021 - Agustus 2025",
  },
  {
    Position: "Sekolah Menengah Atas (SMA) Negeri 7 Luwu",
    Company: `IPA`,
    Location: "Belopa - Sulawesi Selatan",
    Type: "SLTA",
    Duration: "Agustus 2019 - Agustus 2021",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  nodejs: nodejs,
  mysql: mysql,
  php: php,
  supabase: supabase,
  nextjs: nextjs,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Sistem Reservasi Alat Camping Belopa Outdor Notifikasi WhatsApp",
    image: belopaoutdoor,
    description: `Website ini adalah platform reservasi alat camping yang dirancang untuk memudahkan pengguna dalam menyewa perlengkapan outdoor. Dengan antarmuka yang responsif, pengguna dapat dengan mudah menelusuri berbagai jenis alat camping, memilih tanggal penyewaan, dan melakukan reservasi secara online. Sistem ini juga terintegrasi dengan WhatsApp untuk memberikan notifikasi langsung kepada pengguna mengenai status reservasi mereka, memastikan komunikasi yang cepat dan efisien antara penyewa dan penyedia layanan. Selain itu, website ini dilengkapi dengan fitur manajemen inventaris yang membantu pemilik usaha dalam melacak ketersediaan alat camping secara real-time.`,
    techstack: "Tailwind CSS, React JS, Supabase, WhatsApp API",
    previewLink: "https://belopaoutdoor-reservasi.netlify.app/",
    githubLink: "https://github.com/Zulkifli39/Sistem-Reservasi-Camping",
  },
  {
    title: "Portal Berita Nasional Gamelab Indonesia",
    image: berita,
    description: `Website ini adalah portal berita yang digunakan untuk menyajikan berbagai informasi terkini dan terpercaya. Website ini dibuat untuk menyelesaikan tugas Magang Studi Independen Batch 6.  Dengan desain yang responsif, pengguna dapat dengan mudah mengakses berita dari berbagai perangkat, baik itu desktop maupun mobile. Portal ini menampilkan berbagai kategori berita, mulai dari politik, ekonomi, teknologi, hingga hiburan, sehingga pengguna dapat dengan mudah menemukan informasi yang mereka cari. Selain itu, website ini juga dilengkapi dengan fitur pencarian yang memungkinkan pengguna untuk mencari artikel berdasarkan kata kunci tertentu. Dengan antarmuka yang user-friendly dan navigasi yang intuitif, portal berita ini bertujuan untuk memberikan pengalaman membaca yang menyenangkan bagi penggunanya.`,
    techstack: "Tailwind CSS, React JS, MySQL, Node JS, Express JS",
    previewLink: "https://portalberita-one.vercel.app/",
    githubLink: "https://github.com/PetrusFE4/Project-19-Aplikasi-Portal-Berita",
  },
  {
    title: "Sistem Pengajuan Surat Desa Kalotok",
    image: surat,
    description: `Website ini adalah platform pengajuan surat yang dirancang untuk memudahkan warga dalam mengajukan berbagai jenis surat administrasi secara online. Dengan antarmuka yang responsif, pengguna dapat dengan mudah mengakses layanan ini dari berbagai perangkat, baik itu desktop maupun mobile. Sistem ini memungkinkan pengguna untuk memilih jenis surat yang ingin diajukan, mengisi formulir dengan data yang diperlukan, dan mengunggah dokumen pendukung secara digital. Setelah pengajuan dilakukan, pengguna akan menerima notifikasi melalui WhatsApp mengenai status pengajuan mereka, mulai dari penerimaan hingga proses verifikasi dan pengambilan surat. Selain itu, website ini juga dilengkapi dengan fitur manajemen data yang membantu petugas desa dalam melacak dan mengelola pengajuan surat secara efisien. Dengan demikian, platform ini bertujuan untuk meningkatkan efisiensi layanan administrasi desa dan memberikan kemudahan bagi warga dalam mengakses layanan tersebut.`,
    techstack: "Bootstrap, PHP, MySQL",
    previewLink: "https://desakalotok.infy.uk/SuratDesa/login.php",
    githubLink: "https://github.com/Zulkifli39/SistemSurat_Desa",
  },
  {
    title: "Project Om Decoration PWA",
    image: decoration,
    description: `Website ini adalah platform untuk melakukan reveevasi alat dekora yang berbasis PWA (Progressive Web App) yang dirancang untuk memudahkan pengguna dalam menyewa perlengkapan dekorasi. Dengan antarmuka yang responsif, pengguna`,
    techstack: "Bootstrap, PHP, MySQL",
    previewLink: "https://website-decoration.ct.ws/Decoration/",
    githubLink: "https://github.com/Zulkifli39/Decoration",
  },
  {
    title: "Online Learning Coding",
    image: learning,
    description: `Website ini adalah platfrom untuk menanmpilkan daftar pembelajaran yang ada di youtube, dibuat dan di slicing sebagai bahan latihan`,
    techstack: "Bootstrap, Php, Laragon",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Peminjaman Buku SMK 5 LUWU",
    image: smk5,
    description: `Website ini dibuat untuk memudahkan mahasiswa dalam melakukan peminjaman buku`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://zulkifli39.github.io/OnlineLearningWeb/",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "mhadzulkffly@gmail.com",
  phone: "082239532293",
};
