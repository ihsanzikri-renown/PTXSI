import React, { useState, useEffect, useRef } from "react";
import { HashRouter, Routes, Route as RouterRoute, Link, useNavigate, useLocation, useParams } from "react-router-dom";
import "./App.css";
import logoMark from "./logo-mark.png";
import founderShang from "./founder-shang.jpg";
import founderTan from "./founder-tan.jpg";
import founderLi from "./founder-li.jpg";
import {
  Menu, X, Globe, MapPin, FileCheck2, Mountain, Users, Zap,
  CheckCircle2, Clock, Circle, PlayCircle, Mail, ArrowRight,
  Flame, Layers, Cog, Truck, Ship, Plane, Route, GraduationCap,
  ShieldCheck, Award, BadgeCheck, Recycle, CalendarDays, Building2, Image, ChevronDown,
  Car, Sprout, Home, TreePine, Droplets, Wrench, HardHat, ArrowLeft, Target, Compass, Newspaper,
} from "lucide-react";

const translations = {
  id: {
    common: {
      backHome: "Kembali ke Beranda",
    },
    nav: {
      company: "Perusahaan",
      about: "Tentang",
      visiMisi: "Visi & Misi",
      leadership: "Kepemimpinan",
      karir: "Karir",
      location: "Lokasi",
      why: "Mengapa Palu",
      kawasan: "Kawasan KEK",
      licensing: "Tahapan",
      partner: "Mitra Strategis",
      products: "Produk",
      media: "Media",
      video: "Video",
      photos: "Foto",
      berita: "Berita",
      contact: "Kontak",
    },
    hero: {
      tag: "Kawasan Ekonomi Khusus Palu, Sulawesi Tengah",
      headline: "Membangun Fondasi Industri Baja Nasional",
      sub: "PT Xinsheng Steel Indonesia mengembangkan pabrik besi dan baja terintegrasi di Kawasan Ekonomi Khusus Palu, dengan teknologi produksi yang didukung penuh oleh mitra strategis kami, Shaanxi Iron and Steel Group Co., Ltd.",
      ctaPrimary: "Profil Perusahaan",
      ctaSecondary: "Hubungi Kami",
      facts: [
        { label: "Nilai Investasi", value: "USD 1,2 Miliar" },
        { label: "Skema Pembangunan", value: "2 Fase" },
        { label: "Didirikan", value: "Mei 2026" },
      ],
      panelLabel: "Proyeksi Kapasitas Produksi",
      panelUnit: "Ton Baja per Tahun",
      bigNumber: "4.000.000",
      capacity: { phase1: "Fase 1", phase2: "Fase 2", total: "Total", phaseValue: "2.000.000", totalValue: "4.000.000" },
    },
    about: {
      title: "Tentang Perusahaan",
      paragraphs: [
        "PT Xinsheng Steel Indonesia didirikan pada Mei 2026 melalui kemitraan strategis dengan Shaanxi Iron and Steel Group Co., Ltd. Seluruh teknologi produksi perusahaan sepenuhnya didukung oleh keahlian dan pengalaman mitra kami di Tiongkok.",
        "Perusahaan membangun pabrik baja di Kawasan Ekonomi Khusus Palu, Sulawesi Tengah, dengan kapasitas produksi tahunan sebesar 4 juta ton. Proyek ini dirancang sebagai satu kesatuan pembangunan yang dijalankan dalam dua fase.",
        "Pembangunan pabrik menggunakan teknologi dan tenaga ahli dari Tiongkok, didukung oleh pemerintah serta tenaga kerja terampil dari Indonesia.",
      ],
      factsheetTitle: "Sekilas Perusahaan",
      facts: [
        { label: "Lokasi", value: "KEK Palu, Sulawesi Tengah" },
        { label: "Mitra Strategis", value: "Shaanxi Iron & Steel Group Co., Ltd." },
        { label: "Kapasitas Produksi", value: "4.000.000 ton/tahun" },
        { label: "Nilai Investasi", value: "USD 1.200.000.000 (± Rp 21.000.000.000.000)" },
      ],
      phasesTitle: "Tahapan Produksi",
      phase1: { title: "Fase 1 — 2 Juta Ton", desc: "Produksi baja konstruksi, besi beton (rebar), dan kawat baja berkecepatan tinggi." },
      phase2: { title: "Fase 2 — 2 Juta Ton", desc: "Produksi baja strip, pipa las frekuensi tinggi (persegi, persegi panjang, bulat), baja siku, baja kanal, baja bentuk C, dan baja bentuk H kecil." },
    },
    why: {
      title: "Mengapa Kawasan Ekonomi Khusus Palu",
      sub: "Lima pertimbangan utama di balik pemilihan lokasi pembangunan pabrik.",
      accessTitle: "Akses Kawasan",
      mapCaption: "Kota Palu, Sulawesi Tengah",
    },
    kawasan: {
      title: "Kawasan Ekonomi Khusus Palu",
      sub: "Kawasan terintegrasi dengan zonasi industri, logistik, dan permukiman yang mendukung operasional pabrik.",
    },
    leadership: {
      title: "Kepemimpinan",
      sub: "Dewan komisaris dan direksi PT Xinsheng Steel Indonesia.",
    },
    licensing: {
      title: "Progres Legalitas & Perizinan",
      sub: "Tahapan perolehan izin pembangunan pabrik, dari perizinan dasar hingga operasi komersial.",
      updated: "Pembaruan terakhir: Agustus 2026",
      legend: { done: "Selesai", progress: "Dalam Proses", upcoming: "Akan Datang" },
    },
    partner: {
      title: "Mitra Strategis",
      name: "Shaanxi Iron & Steel Group Co., Ltd.",
      location: "Xi'an, Shaanxi, Tiongkok",
      paragraphs: [
        "Shaanxi Iron and Steel Group didirikan pada Juli 2009 untuk merevitalisasi industri baja Provinsi Shaanxi. Pada Desember 2011, perusahaan bergabung sebagai anak usaha penuh dari Shaanxi Coal Group, perusahaan yang masuk daftar Fortune Global 500, dan kini menjadi satu-satunya BUMN baja berskala besar di provinsi tersebut.",
        "Grup ini berkantor pusat di Xi'an dengan sembilan anak perusahaan utama yang mencakup produksi baja, perluasan rantai industri, penjualan, pengadaan bahan baku dan bahan bakar, pengembangan sumber daya mineral, hingga pengadaan baja bekas.",
      ],
      factsheetTitle: "Sekilas Grup",
      facts: [
        { label: "Didirikan", value: "Juli 2009" },
        { label: "Kantor Pusat", value: "Xi'an, Tiongkok" },
        { label: "Total Aset", value: "± ¥42,575 Miliar Yuan" },
        { label: "Karyawan", value: "14.000+" },
        { label: "Kapasitas Gabungan", value: "± 11,5 Juta Ton/Tahun" },
      ],
      visionTitle: "Visi 2030",
      visionText: "Mengusung strategi \"tiga peningkatan dan satu transformasi\", Shaanxi Iron and Steel Group menargetkan produksi 4 juta ton baja khusus pada 2030, dan telah menempati peringkat perusahaan baja Kelas A (sangat kuat) nasional selama lima tahun berturut-turut.",
      overviewTitle: "Cakupan Industri",
    },
    karir: {
      title: "Karir",
      sub: "Pembangunan pabrik skala besar ini akan membuka ribuan peluang kerja bagi tenaga kerja terampil Indonesia.",
      cta: "Tertarik bergabung? Kirimkan CV Anda ke email di bawah, atau hubungi tim kami.",
    },
    visiMisi: {
      title: "Visi & Misi",
      sub: "Arah dan komitmen PT Xinsheng Steel Indonesia dalam membangun industri baja nasional.",
      visionLabel: "Visi",
      visionText: "Menjadi produsen besi dan baja terkemuka di Indonesia Timur yang berkontribusi pada kemandirian industri baja nasional, dengan standar teknologi, kualitas, dan keberlanjutan kelas dunia.",
      missionLabel: "Misi",
      missionItems: [
        "Membangun dan mengoperasikan pabrik baja terintegrasi berkapasitas 4 juta ton per tahun di Kawasan Ekonomi Khusus Palu.",
        "Mentransfer teknologi dan keahlian produksi baja kelas dunia dari mitra strategis untuk memperkuat kapasitas industri nasional.",
        "Menciptakan lapangan kerja dan mengembangkan tenaga kerja terampil Indonesia di sektor industri berat.",
        "Menjalankan operasional yang taat pada standar lingkungan, keselamatan kerja, dan tata kelola yang bertanggung jawab.",
        "Mendukung pertumbuhan ekonomi Sulawesi Tengah dan memperkuat rantai pasok industri baja nasional.",
      ],
    },
    products: {
      title: "Lini Produk",
      sub: "Produk baja dari mitra strategis kami yang telah mendapat pengakuan dan sertifikasi Tiongkok serta internasional.",
    },
    certifications: {
      title: "Sertifikasi & Penghargaan",
      sub: "Produk utama telah meraih pengakuan kualitas nasional dan menjadi pemasok proyek-proyek strategis Tiongkok.",
      achievement: "Produk unggulan telah meraih Piala Emas Kualitas Fisik Metalurgi Nasional, status produk bebas inspeksi nasional, dan predikat Merek Dagang Terkenal Provinsi Shaanxi, serta diekspor ke Jepang, Korea Selatan, Asia Tenggara, dan Timur Tengah.",
      projectsTitle: "Dipercaya untuk Proyek Strategis",
    },
    video: {
      title: "Galeri Video",
      sub: "Dokumentasi visual perusahaan akan segera tersedia di sini.",
      caption: "Video segera hadir",
    },
    photos: {
      title: "Galeri Foto",
      sub: "Dokumentasi foto perusahaan akan segera tersedia di sini.",
      caption: "Foto segera hadir",
    },
    berita: {
      title: "Berita",
      sub: "Kabar dan perkembangan terbaru seputar PT Xinsheng Steel Indonesia.",
      caption: "Berita segera hadir",
      readMore: "Baca selengkapnya",
    },
    contact: {
      title: "Hubungi Kami",
      sub: "Untuk informasi lebih lanjut mengenai proyek dan peluang kerja sama, silakan hubungi kami.",
      emailLabel: "Email",
      locationLabel: "Lokasi Proyek",
      partnerLabel: "Mitra Teknologi",
      accessTitle: "Akses Lokasi",
    },
    footer: { rights: "Seluruh hak cipta dilindungi." },
  },

  en: {
    common: {
      backHome: "Back to Home",
    },
    nav: {
      company: "Company",
      about: "About",
      visiMisi: "Vision & Mission",
      leadership: "Leadership",
      karir: "Careers",
      location: "Location",
      why: "Why Palu",
      kawasan: "SEZ Zones",
      licensing: "Licensing",
      partner: "Partner",
      products: "Products",
      media: "Media",
      video: "Video",
      photos: "Photos",
      berita: "News",
      contact: "Contact",
    },
    hero: {
      tag: "Palu Special Economic Zone, Central Sulawesi",
      headline: "Building the Foundation of a National Steel Industry",
      sub: "PT Xinsheng Steel Indonesia is developing an integrated iron and steel plant in the Palu Special Economic Zone, with production technology fully backed by our strategic partner, Shaanxi Iron and Steel Group Co., Ltd.",
      ctaPrimary: "Company Profile",
      ctaSecondary: "Contact Us",
      facts: [
        { label: "Investment Value", value: "USD 1.2 Billion" },
        { label: "Development", value: "2 Phases" },
        { label: "Founded", value: "May 2026" },
      ],
      panelLabel: "Projected Production Capacity",
      panelUnit: "Tonnes of Steel / Year",
      bigNumber: "4,000,000",
      capacity: { phase1: "Phase 1", phase2: "Phase 2", total: "Total", phaseValue: "2,000,000", totalValue: "4,000,000" },
    },
    about: {
      title: "About the Company",
      paragraphs: [
        "PT Xinsheng Steel Indonesia was established in May 2026 through a strategic partnership with Shaanxi Iron and Steel Group Co., Ltd. All of the company's production technology is fully backed by the expertise and experience of our partner in China.",
        "The company is building a steel plant in the Palu Special Economic Zone, Central Sulawesi, with an annual production capacity of 4 million tonnes. The project is designed as a single development carried out in two phases.",
        "Construction will draw on Chinese technology and expertise, supported by the government and skilled workers from Indonesia.",
      ],
      factsheetTitle: "Company at a Glance",
      facts: [
        { label: "Location", value: "Palu SEZ, Central Sulawesi" },
        { label: "Strategic Partner", value: "Shaanxi Iron & Steel Group Co., Ltd." },
        { label: "Production Capacity", value: "4,000,000 tonnes/year" },
        { label: "Investment Value", value: "USD 1,200,000,000 (≈ IDR 21,000,000,000,000)" },
      ],
      phasesTitle: "Production Phases",
      phase1: { title: "Phase 1 — 2 Million Tonnes", desc: "Construction steel, concrete reinforcing bar (rebar), and high-speed wire rod." },
      phase2: { title: "Phase 2 — 2 Million Tonnes", desc: "Steel strip, high-frequency welded pipe (square, rectangular, round), angle steel, channel steel, C-section, and small H-section steel." },
    },
    why: {
      title: "Why the Palu Special Economic Zone",
      sub: "Five key factors behind the choice of plant location.",
      accessTitle: "Zone Access",
      mapCaption: "Palu City, Central Sulawesi",
    },
    kawasan: {
      title: "Palu Special Economic Zone",
      sub: "An integrated zone with industrial, logistics, and residential precincts supporting plant operations.",
    },
    leadership: {
      title: "Leadership",
      sub: "Board of Commissioners and Directors of PT Xinsheng Steel Indonesia.",
    },
    licensing: {
      title: "Licensing & Regulatory Progress",
      sub: "Milestones toward plant construction, from foundational permits to commercial operation.",
      updated: "Last updated: August 2026",
      legend: { done: "Completed", progress: "In Progress", upcoming: "Upcoming" },
    },
    partner: {
      title: "Strategic Partner",
      name: "Shaanxi Iron & Steel Group Co., Ltd.",
      location: "Xi'an, Shaanxi, China",
      paragraphs: [
        "Shaanxi Iron and Steel Group was founded in July 2009 to revitalise Shaanxi Province's steel industry. In December 2011 it was restructured as a wholly-owned subsidiary of Shaanxi Coal Group, a Fortune Global 500 company, and is now the province's only large-scale state-owned steel enterprise.",
        "The group is headquartered in Xi'an with nine major subsidiaries spanning steel production, industry-chain expansion, sales, raw material and fuel supply, mineral resource development, and scrap steel supply.",
      ],
      factsheetTitle: "Group at a Glance",
      facts: [
        { label: "Founded", value: "July 2009" },
        { label: "Headquarters", value: "Xi'an, China" },
        { label: "Total Assets", value: "≈ ¥42.575 Billion Yuan" },
        { label: "Employees", value: "14,000+" },
        { label: "Combined Capacity", value: "≈ 11.5 Million Tonnes/Year" },
      ],
      visionTitle: "Vision 2030",
      visionText: "Under its \"three upgrades and one transformation\" strategy, Shaanxi Iron and Steel Group is targeting 4 million tonnes of specialty steel production by 2030, and has ranked among China's top-tier Class A steel enterprises for five consecutive years.",
      overviewTitle: "Industry Coverage",
    },
    karir: {
      title: "Careers",
      sub: "This large-scale plant will open thousands of job opportunities for skilled Indonesian workers.",
      cta: "Interested in joining us? Send your CV to the email below, or contact our team.",
    },
    visiMisi: {
      title: "Vision & Mission",
      sub: "PT Xinsheng Steel Indonesia's direction and commitment in building a national steel industry.",
      visionLabel: "Vision",
      visionText: "To become a leading iron and steel producer in Eastern Indonesia that contributes to national steel industry self-sufficiency, with world-class technology, quality, and sustainability standards.",
      missionLabel: "Mission",
      missionItems: [
        "Build and operate an integrated steel plant with a capacity of 4 million tonnes per year in the Palu Special Economic Zone.",
        "Transfer world-class steel production technology and expertise from our strategic partner to strengthen national industry capacity.",
        "Create jobs and develop a skilled Indonesian workforce in the heavy industry sector.",
        "Operate in compliance with environmental, workplace safety, and responsible governance standards.",
        "Support Central Sulawesi's economic growth and strengthen the national steel industry supply chain.",
      ],
    },
    products: {
      title: "Product Range",
      sub: "Steel products from our strategic partner, recognised and certified both in China and internationally.",
    },
    certifications: {
      title: "Certifications & Awards",
      sub: "Flagship products have earned national quality recognition and supplied several strategic Chinese infrastructure projects.",
      achievement: "Flagship products have won the National Metallurgical Physical Quality Gold Cup Award, national inspection-exempt product status, and Shaanxi Famous Trademark recognition, and are exported to Japan, South Korea, Southeast Asia, and the Middle East.",
      projectsTitle: "Trusted on Strategic Projects",
    },
    video: {
      title: "Video Gallery",
      sub: "Company video documentation will be available here soon.",
      caption: "Video coming soon",
    },
    photos: {
      title: "Photo Gallery",
      sub: "Company photo documentation will be available here soon.",
      caption: "Photo coming soon",
    },
    berita: {
      title: "News",
      sub: "Latest news and updates about PT Xinsheng Steel Indonesia.",
      caption: "News coming soon",
      readMore: "Read more",
    },
    contact: {
      title: "Get in Touch",
      sub: "For more information about the project and partnership opportunities, please reach out.",
      emailLabel: "Email",
      locationLabel: "Project Location",
      partnerLabel: "Technology Partner",
      accessTitle: "Site Access",
    },
    footer: { rights: "All rights reserved." },
  },
};

const whyReasons = [
  { Icon: MapPin, id: { title: "Lokasi Strategis", desc: "Kota Palu di Pulau Sulawesi dilalui jalur pelayaran internasional dan Alur Laut Kepulauan Indonesia (ALKI), memudahkan impor bahan baku dan ekspor produk jadi." }, en: { title: "Strategic Location", desc: "The city of Palu on Sulawesi sits along international shipping lanes and Indonesia's Archipelagic Sea Lanes (ALKI), easing raw material imports and finished-goods exports." } },
  { Icon: FileCheck2, id: { title: "Kemudahan Perizinan & Pajak", desc: "Layanan PTSP, pembebasan bea masuk, dan insentif perpajakan di kawasan, didukung Administrator KEK yang memangkas birokrasi bagi investor." }, en: { title: "Streamlined Permits & Tax", desc: "One-stop licensing, import duty exemptions, and tax incentives within the zone, backed by a Zone Administrator that cuts red tape for investors." } },
  { Icon: Mountain, id: { title: "Ketersediaan Bahan Baku", desc: "Cadangan besi, batu kapur, dan batu bara yang melimpah di sekitar kawasan mampu memenuhi kebutuhan pabrik baja skala menengah." }, en: { title: "Raw Material Availability", desc: "Abundant reserves of iron ore, limestone, and coal nearby can meet the needs of a medium-scale steel plant." } },
  { Icon: Users, id: { title: "Tenaga Kerja Terampil", desc: "Pertumbuhan ekonomi Kota Palu 4,36% YoY, dengan sektor pertambangan dan penggalian tumbuh 9,79%, menyediakan tenaga kerja terampil di bidang industri." }, en: { title: "Skilled Workforce", desc: "Palu's economy grew 4.36% year-on-year, with mining and quarrying up 9.79%, providing a ready pool of skilled industrial labour." } },
  { Icon: Zap, id: { title: "Fasilitas Pendukung", desc: "Sumber daya air melimpah dengan drainase luas, serta jaringan listrik 70kV hingga 500kV yang tersedia di sekitar kawasan." }, en: { title: "Supporting Infrastructure", desc: "Abundant water resources with extensive drainage, plus a 70kV–500kV electricity grid serving the surrounding area." } },
];

const accessPoints = [
  { Icon: Ship, id: "±10 km dari Pelabuhan Pantoloan", en: "~10 km from Pantoloan Port" },
  { Icon: Plane, id: "Dekat Bandara Mutiara SIS Al-Jufri", en: "Near Mutiara SIS Al-Jufri Airport" },
  { Icon: Route, id: "Dilalui Jalan Trans Sulawesi", en: "Along the Trans-Sulawesi Highway" },
  { Icon: GraduationCap, id: "Berdekatan dengan Universitas Tadulako", en: "Adjacent to Tadulako University" },
];

const founders = [
  { photo: founderShang, initials: "SH", name: "Shang Hanping", id: { role: "Komisaris" }, en: { role: "Commissioner" }, nat: { id: "Tiongkok", en: "China" } },
  { photo: founderTan, initials: "TE", name: "Tan Lam Eng", id: { role: "Direktur Utama" }, en: { role: "President Director" }, nat: { id: "Malaysia", en: "Malaysia" } },
  { photo: founderLi, initials: "LK", name: "Li Kangfeng", id: { role: "Direktur" }, en: { role: "Director" }, nat: { id: "Tiongkok", en: "China" } },
];

const licensingPhases = [
  {
    id: { title: "Perizinan Dasar", range: "Mei – Juli 2026" }, en: { title: "Foundational Permits", range: "May – July 2026" },
    items: [
      { status: "done", id: "Akta Pendirian & SK Kemenkumham", en: "Deed of Establishment & Ministry of Law Decree" },
      { status: "done", id: "NPWP Perusahaan", en: "Company Tax ID (NPWP)" },
      { status: "done", id: "Nomor Induk Berusaha (NIB)", en: "Business Identification Number (NIB)" },
      { status: "done", id: "Konfirmasi Kesesuaian Pemanfaatan Ruang (KKPR)", en: "Spatial Use Conformity Confirmation (KKPR)" },
    ],
  },
  {
    id: { title: "Perizinan Lanjutan", range: "Juli 2026 – Januari 2027" }, en: { title: "Follow-on Permits", range: "July 2026 – January 2027" },
    items: [
      { status: "progress", id: "RKL-RPL Rinci & Persetujuan Lingkungan (target Sept 2026)", en: "Detailed Environmental Plan & Approval (target Sept 2026)" },
      { status: "upcoming", id: "AMDAL (Analisis Dampak Lingkungan)", en: "Environmental Impact Assessment (AMDAL)" },
      { status: "upcoming", id: "Izin Impor, OSS RBA, SIINas, FRSW", en: "Import Licence, OSS RBA, SIINas, FRSW" },
    ],
  },
  {
    id: { title: "Pra-Konstruksi", range: "Juli 2026 – Januari 2027" }, en: { title: "Pre-Construction", range: "July 2026 – January 2027" },
    items: [
      { status: "upcoming", id: "Penyelesaian Master Plan / Site Plan", en: "Finalising Master Plan / Site Plan" },
      { status: "upcoming", id: "Sondir & Soil Boring", en: "Sondir & Soil Boring Survey" },
      { status: "upcoming", id: "Izin Listrik (PLN) & Air Baku", en: "Electricity (PLN) & Raw Water Permits" },
    ],
  },
  {
    id: { title: "Konstruksi", range: "Januari 2027 – Juli 2030" }, en: { title: "Construction", range: "January 2027 – July 2030" },
    items: [
      { status: "upcoming", id: "Sertifikat Laik Fungsi (SLF)", en: "Certificate of Building Worthiness (SLF)" },
    ],
  },
  {
    id: { title: "Operasi", range: "Mulai Juli 2030" }, en: { title: "Operation", range: "From July 2030" },
    items: [
      { status: "upcoming", id: "Izin Operasi / Industri", en: "Operating / Industrial Licence" },
      { status: "upcoming", id: "SNI, ISO & Izin Ekspor", en: "SNI, ISO Certification & Export Licence" },
    ],
  },
];

const licensingStages = [
  {
    key: "perizinan",
    path: "/perizinan",
    phaseIndices: [0, 1],
    id: {
      title: "Perizinan",
      explanation: "Tahapan pengurusan seluruh izin dasar dan izin lanjutan yang dibutuhkan sebelum pembangunan fisik pabrik dapat dimulai, mulai dari legalitas pendirian perusahaan hingga persetujuan lingkungan.",
    },
    en: {
      title: "Licensing",
      explanation: "The stage of securing all foundational and follow-on permits required before physical construction can begin, from company incorporation through to environmental approval.",
    },
  },
  {
    key: "pra-konstruksi",
    path: "/pra-konstruksi",
    phaseIndices: [2],
    id: {
      title: "Pra-Konstruksi",
      explanation: "Tahapan persiapan teknis sebelum konstruksi dimulai, meliputi penyelesaian gambar rencana, survei tanah, serta pengurusan izin penggunaan listrik dan air baku.",
    },
    en: {
      title: "Pre-Construction",
      explanation: "The technical preparation stage before construction begins, covering finalisation of site plans, ground surveys, and electricity and raw water usage permits.",
    },
  },
  {
    key: "konstruksi",
    path: "/konstruksi",
    phaseIndices: [3],
    id: {
      title: "Konstruksi",
      explanation: "Tahapan pembangunan fisik pabrik hingga memperoleh Sertifikat Laik Fungsi, menandai kesiapan bangunan untuk dioperasikan.",
    },
    en: {
      title: "Construction",
      explanation: "The physical construction stage through to obtaining the Certificate of Building Worthiness, marking the building's readiness for operation.",
    },
  },
  {
    key: "operasi",
    path: "/operasi",
    phaseIndices: [4],
    id: {
      title: "Operasi",
      explanation: "Tahapan akhir menuju operasi komersial, meliputi perolehan izin industri, sertifikasi SNI dan ISO, serta izin ekspor produk.",
    },
    en: {
      title: "Operation",
      explanation: "The final stage toward commercial operation, covering industrial licensing, SNI and ISO certification, and export licensing.",
    },
  },
];

const industryOverview = [
  { Icon: Mountain, id: "Pertambangan", en: "Mining" },
  { Icon: Flame, id: "Pembuatan Baja", en: "Steelmaking" },
  { Icon: Layers, id: "Penggulingan Baja", en: "Steel Rolling" },
  { Icon: Zap, id: "Kawat Baja Kecepatan Tinggi", en: "High-Speed Wire Rod" },
  { Icon: Cog, id: "Sistem Penunjang", en: "Auxiliary Systems" },
  { Icon: Truck, id: "Logistik", en: "Logistics" },
];

const productCategories = [
  { id: { title: "Besi Beton (Rebar)", items: ["Batang polos & berusuk canai panas", "Batang tahan gempa 650 MPa", "Seri tahan korosi unsur tanah jarang (HRB400ERE)"] }, en: { title: "Concrete Reinforcing Bar", items: ["Plain & ribbed hot-rolled bar", "High-seismic bar (650 MPa)", "Rare-earth corrosion-resistant series (HRB400ERE)"] } },
  { id: { title: "Kawat Baja & Batang Kawat", items: ["Kawat prategang (YL82B, SWRH72A/77B)", "Kawat las berpelindung gas (ER70S-6)", "Elektroda las (H08A)"] }, en: { title: "Wire Rod & Steel Wire", items: ["Prestressed wire (YL82B, SWRH72A/77B)", "Gas-shielded welding wire (ER70S-6)", "Welding electrode (H08A)"] } },
  { id: { title: "Baja Struktural & Paduan", items: ["Baja karbon struktural (Q235B, 45#)", "Baja paduan cold heading (40Cr, SWRCH35K)", "Baja pegas (65Mn)"] }, en: { title: "Structural & Alloy Steel", items: ["Structural carbon steel (Q235B, 45#)", "Cold-heading alloy steel (40Cr, SWRCH35K)", "Spring steel (65Mn)"] } },
  { id: { title: "Baja Bulat & Batang Presisi", items: ["Baja bulat canai panas (Q195/Q235, 20)", "Baja cold heading (ML35, ML45)", "Batang canai dingin daktilitas tinggi (CRB600H)"] }, en: { title: "Round Bar & Precision Bar", items: ["Hot-rolled round bar (Q195/Q235, 20)", "Cold-heading steel (ML35, ML45)", "High-ductility cold-rolled ribbed bar (CRB600H)"] } },
  { id: { title: "Batang Prategang & Pelat", items: ["Batang berulir prategang (PSB785/PSB830)", "Pelat flensa (Q235B, Q345B)", "Strip baja canai panas"] }, en: { title: "Prestressed Bar & Plate", items: ["Prestressed ribbed bar (PSB785/PSB830)", "Flange plate (Q235B, Q345B)", "Hot-rolled steel strip"] } },
  { id: { title: "Material Proses Lanjutan", items: ["Baja pelat sedang & berat", "Baja siku, kanal, bentuk C & H", "Produk sampingan tanur tinggi"] }, en: { title: "Downstream & By-Products", items: ["Medium & heavy steel plate", "Angle, channel, C- and H-section steel", "Blast furnace by-products"] } },
];

const certifications = [
  { Icon: ShieldCheck, id: "Sistem Manajemen K3 (OHSMS)", en: "Occupational Health & Safety (OHSMS)" },
  { Icon: BadgeCheck, id: "Sistem Manajemen Pengukuran", en: "Measurement Management System" },
  { Icon: Recycle, id: "Sistem Manajemen Lingkungan", en: "Environmental Management System" },
  { Icon: Award, id: "ISO 14001", en: "ISO 14001" },
  { Icon: ShieldCheck, id: "Sistem Manajemen Mutu (XQC)", en: "Quality Management System (XQC)" },
  { Icon: BadgeCheck, id: "Sertifikat Kesesuaian Mutu (XQC)", en: "Quality Conformity Certificate (XQC)" },
];

const referenceProjects = [
  { id: "Bendungan Tiga Ngarai", en: "Three Gorges Dam" },
  { id: "Tol Xi'an–Hanzhong", en: "Xi'an–Hanzhong Expressway" },
  { id: "Jalur KA Zhengzhou–Xi'an", en: "Zhengzhou–Xi'an Railway" },
  { id: "Pusat Peluncuran Satelit Jiuquan", en: "Jiuquan Satellite Launch Center" },
];

const videos = [
  { id: { title: "Profil Perusahaan" }, en: { title: "Company Profile" } },
  { id: { title: "Proses Produksi Baja" }, en: { title: "Steel Production Process" } },
  { id: { title: "Progres Pembangunan Pabrik" }, en: { title: "Plant Construction Progress" } },
  { id: { title: "Kawasan Ekonomi Khusus Palu" }, en: { title: "Palu Special Economic Zone" } },
];

const photos = [
  { id: { title: "Progres Pembangunan" }, en: { title: "Construction Progress" } },
  { id: { title: "Lokasi Kawasan" }, en: { title: "Site Location" } },
  { id: { title: "Tim Perusahaan" }, en: { title: "Company Team" } },
  { id: { title: "Produk Baja" }, en: { title: "Steel Products" } },
  { id: { title: "Fasilitas Produksi" }, en: { title: "Production Facility" } },
  { id: { title: "Kegiatan Komunitas" }, en: { title: "Community Engagement" } },
  { id: { title: "Sertifikasi & Penghargaan" }, en: { title: "Certifications & Awards" } },
  { id: { title: "Kantor & Fasilitas Pendukung" }, en: { title: "Office & Support Facilities" } },
];

const newsItems = [
  {
    slug: "groundbreaking-pabrik",
    id: {
      title: "Groundbreaking Pembangunan Pabrik",
      body: [
        "PT Xinsheng Steel Indonesia menyelenggarakan acara peletakan batu pertama pembangunan pabrik besi dan baja di Kawasan Ekonomi Khusus Palu. Acara ini menandai dimulainya babak baru investasi industri berat di Sulawesi Tengah, dihadiri oleh perwakilan pemerintah daerah, Administrator KEK Palu, serta manajemen PT Xinsheng Steel Indonesia dan mitra strategis, Shaanxi Iron and Steel Group Co., Ltd.",
        "Dalam sambutannya, manajemen perusahaan menegaskan komitmen untuk menyelesaikan pembangunan Fase 1 sesuai jadwal yang telah ditetapkan, sekaligus membuka peluang kerja bagi tenaga kerja lokal.",
      ],
    },
    en: {
      title: "Plant Groundbreaking Ceremony",
      body: [
        "PT Xinsheng Steel Indonesia held a groundbreaking ceremony for its iron and steel plant in the Palu Special Economic Zone. The event marked the start of a new chapter in heavy industry investment in Central Sulawesi, attended by local government representatives, the Palu SEZ Administrator, and management from both PT Xinsheng Steel Indonesia and its strategic partner, Shaanxi Iron and Steel Group Co., Ltd.",
        "In its remarks, company management reaffirmed its commitment to completing Phase 1 construction on schedule, while opening job opportunities for the local workforce.",
      ],
    },
  },
  {
    slug: "kerja-sama-shaanxi",
    id: {
      title: "Penandatanganan Kerja Sama dengan Shaanxi Iron & Steel",
      body: [
        "PT Xinsheng Steel Indonesia resmi menandatangani perjanjian kemitraan strategis dengan Shaanxi Iron and Steel Group Co., Ltd., produsen baja milik negara terbesar di Provinsi Shaanxi, Tiongkok. Melalui kerja sama ini, seluruh teknologi produksi pabrik di Kawasan Ekonomi Khusus Palu akan didukung penuh oleh keahlian dan pengalaman Shaanxi Iron and Steel Group.",
        "Kemitraan ini mencakup transfer teknologi, dukungan tenaga ahli, serta akses terhadap standar produksi baja yang telah diakui secara nasional maupun internasional.",
      ],
    },
    en: {
      title: "Partnership Signing with Shaanxi Iron & Steel",
      body: [
        "PT Xinsheng Steel Indonesia officially signed a strategic partnership agreement with Shaanxi Iron and Steel Group Co., Ltd., the largest state-owned steel producer in Shaanxi Province, China. Through this partnership, all production technology at the Palu Special Economic Zone plant will be fully supported by Shaanxi Iron and Steel Group's expertise and experience.",
        "The partnership covers technology transfer, expert personnel support, and access to production standards recognised both nationally and internationally.",
      ],
    },
  },
  {
    slug: "kunjungan-pemerintah",
    id: {
      title: "Kunjungan Pemerintah ke Kawasan KEK Palu",
      body: [
        "Sejumlah pejabat pemerintah daerah dan Administrator Kawasan Ekonomi Khusus Palu melakukan kunjungan kerja ke lokasi pembangunan pabrik PT Xinsheng Steel Indonesia. Kunjungan ini bertujuan untuk meninjau langsung progres perizinan dan kesiapan lahan, sekaligus memastikan kelancaran proses investasi di kawasan tersebut.",
        "Dalam kunjungan tersebut, pemerintah menyampaikan dukungan penuh terhadap investasi industri baja yang diharapkan dapat mendorong pertumbuhan ekonomi Sulawesi Tengah.",
      ],
    },
    en: {
      title: "Government Visit to the Palu SEZ",
      body: [
        "Local government officials and the Palu Special Economic Zone Administrator conducted a working visit to PT Xinsheng Steel Indonesia's plant construction site. The visit aimed to directly review licensing progress and land readiness, while ensuring the investment process in the zone proceeds smoothly.",
        "During the visit, the government expressed full support for the steel industry investment, which is expected to drive economic growth in Central Sulawesi.",
      ],
    },
  },
  {
    slug: "progres-fase-1",
    id: {
      title: "Progres Pembangunan Fase 1",
      body: [
        "PT Xinsheng Steel Indonesia melaporkan perkembangan terbaru pembangunan Fase 1 pabrik, yang akan memproduksi baja konstruksi, besi beton, dan kawat baja berkecepatan tinggi dengan kapasitas 2 juta ton per tahun. Tahapan pra-konstruksi, termasuk penyelesaian gambar rencana dan survei tanah, terus berjalan sesuai jadwal.",
        "Perusahaan optimistis Fase 1 dapat mulai beroperasi sesuai target yang telah ditetapkan dalam rencana pembangunan.",
      ],
    },
    en: {
      title: "Phase 1 Construction Update",
      body: [
        "PT Xinsheng Steel Indonesia reported the latest progress on Phase 1 construction, which will produce construction steel, rebar, and high-speed wire rod with a capacity of 2 million tonnes per year. Pre-construction activities, including finalising site plans and ground surveys, continue to proceed on schedule.",
        "The company remains confident that Phase 1 will begin operations in line with the targets set out in the construction plan.",
      ],
    },
  },
  {
    slug: "rekrutmen-tenaga-kerja",
    id: {
      title: "Perekrutan Tenaga Kerja Lokal Dimulai",
      body: [
        "Seiring dengan progres pembangunan pabrik, PT Xinsheng Steel Indonesia mulai membuka proses perekrutan tenaga kerja lokal untuk berbagai bidang, mulai dari produksi dan manufaktur, teknik dan perawatan, hingga kesehatan dan keselamatan kerja.",
        "Perusahaan berkomitmen untuk memberdayakan tenaga kerja terampil dari Sulawesi Tengah sebagai bagian dari kontribusi terhadap pertumbuhan ekonomi daerah dan pengembangan sumber daya manusia lokal di sektor industri berat.",
      ],
    },
    en: {
      title: "Local Workforce Recruitment Begins",
      body: [
        "In line with plant construction progress, PT Xinsheng Steel Indonesia has begun recruiting local workers across several fields, from production and manufacturing to engineering and maintenance, and health and safety.",
        "The company is committed to empowering skilled workers from Central Sulawesi as part of its contribution to regional economic growth and the development of local human resources in the heavy industry sector.",
      ],
    },
  },
  {
    slug: "sosialisasi-lingkungan",
    id: {
      title: "Sosialisasi Lingkungan kepada Masyarakat",
      body: [
        "PT Xinsheng Steel Indonesia bersama Dinas Lingkungan Hidup dan akademisi menyelenggarakan sosialisasi mengenai rencana pengelolaan dan pemantauan lingkungan hidup (RKL-RPL) kepada masyarakat sekitar Kawasan Ekonomi Khusus Palu. Kegiatan ini merupakan bagian dari proses menuju penerbitan Persetujuan Lingkungan.",
        "Melalui forum ini, perusahaan menjelaskan langkah-langkah mitigasi dampak lingkungan serta membuka ruang dialog dengan warga sekitar kawasan.",
      ],
    },
    en: {
      title: "Community Environmental Briefing",
      body: [
        "PT Xinsheng Steel Indonesia, together with the Environmental Agency and academic experts, held a briefing on the environmental management and monitoring plan (RKL-RPL) for communities around the Palu Special Economic Zone. The event is part of the process toward obtaining Environmental Approval.",
        "Through this forum, the company explained its environmental impact mitigation measures and opened a dialogue with residents near the zone.",
      ],
    },
  },
];

const kawasanZones = [
  { Icon: Layers, id: "Zona Logam Non-Besi", en: "Non-Ferrous Metal Zone" },
  { Icon: Car, id: "Zona Otomotif", en: "Automotive Zone" },
  { Icon: Sprout, id: "Zona Agroindustri", en: "Agro-Industry Zone" },
  { Icon: Home, id: "Kawasan Permukiman", en: "Residential Precinct" },
  { Icon: TreePine, id: "Taman Pusat & Ruang Terbuka", en: "Central Park & Open Space" },
  { Icon: Droplets, id: "Instalasi Pengolahan Air", en: "Water Treatment Plant" },
];

const karirFields = [
  { Icon: Flame, id: { title: "Produksi & Manufaktur", desc: "Operator dan staf lini produksi besi dan baja." }, en: { title: "Production & Manufacturing", desc: "Operators and staff for the iron and steel production line." } },
  { Icon: Wrench, id: { title: "Teknik & Perawatan", desc: "Insinyur dan teknisi perawatan mesin pabrik." }, en: { title: "Engineering & Maintenance", desc: "Engineers and technicians for plant equipment maintenance." } },
  { Icon: ShieldCheck, id: { title: "K3 & Lingkungan", desc: "Tim kesehatan, keselamatan kerja, dan pengelolaan lingkungan." }, en: { title: "HSE & Environment", desc: "Health, safety, and environmental management team." } },
  { Icon: Truck, id: { title: "Logistik & Operasional", desc: "Tim pergudangan, distribusi, dan operasional harian." }, en: { title: "Logistics & Operations", desc: "Warehousing, distribution, and daily operations team." } },
];

function Hero({ t, scrollToId }) {
  const bars = [
    { label: t.hero.capacity.phase1, value: t.hero.capacity.phaseValue, pct: 50, highlight: false },
    { label: t.hero.capacity.phase2, value: t.hero.capacity.phaseValue, pct: 50, highlight: false },
    { label: t.hero.capacity.total, value: t.hero.capacity.totalValue, pct: 100, highlight: true },
  ];

  return (
    <section id="home" className="scroll-mt-20 border-b border-steel-dark bg-charcoal pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
        <div>
          <div className="animate-hero-1 mb-6 inline-flex items-center gap-2 rounded-full border border-steel-dark px-4 py-1.5 text-sm text-neutral-300">
            <MapPin className="h-4 w-4 text-gold" />
            {t.hero.tag}
          </div>
          <h1 className="animate-hero-2 font-display text-4xl font-semibold leading-tight text-gold sm:text-5xl lg:text-6xl">
            {t.hero.headline}
          </h1>
          <p className="animate-hero-3 mt-6 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            {t.hero.sub}
          </p>
          <div className="animate-hero-4 mt-8 flex flex-wrap gap-4">
            <button onClick={() => scrollToId("about")} className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-dark">
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => scrollToId("contact")} className="inline-flex items-center gap-2 rounded-lg border border-steel-dark px-6 py-3 text-sm font-semibold text-neutral-200 transition-colors hover:border-gold hover:text-gold">
              {t.hero.ctaSecondary}
            </button>
          </div>

          <div className="animate-hero-4 mt-10 grid grid-cols-3 gap-6 border-t border-steel-dark pt-6">
            {t.hero.facts.map((f, i) => (
              <div key={i}>
                <div className="font-display text-lg font-semibold text-white sm:text-xl">{f.value}</div>
                <div className="mt-1 text-xs text-neutral-400">{f.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-hero-4 rounded-3xl border border-steel-dark bg-steel p-6 sm:p-8">
          <div className="mb-4 text-sm text-neutral-100">{t.hero.panelLabel}</div>
          <div className="mb-2 flex items-baseline gap-3">
            <span className="font-display text-5xl font-bold text-gold sm:text-6xl">{t.hero.bigNumber}</span>
          </div>
          <div className="mb-8 text-sm text-neutral-200">{t.hero.panelUnit}</div>
          <div className="flex items-end gap-6 border-t border-neutral-50/20 pt-8" style={{ height: "11rem" }}>
            {bars.map((b, i) => (
              <div key={i} className="flex h-full flex-1 flex-col items-center justify-end">
                <span className="mb-2 text-xs font-medium text-neutral-50">{b.value}</span>
                <div
                  className={`w-full rounded-t-lg ${b.highlight ? "bg-gold" : "bg-charcoal-light"}`}
                  style={{ height: b.pct + "%" }}
                ></div>
                <span className="mt-2 text-xs text-neutral-200">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ t }) {
  return (
    <section id="about" className="scroll-mt-20 bg-charcoal py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl font-semibold text-gold sm:text-4xl">{t.about.title}</h2>
            <div className="mt-6 space-y-4">
              {t.about.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-neutral-300">{p}</p>
              ))}
            </div>

            <h3 className="mt-12 font-display text-xl font-semibold text-white">{t.about.phasesTitle}</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-steel-dark bg-steel p-6">
                <div className="font-display text-lg font-semibold text-white">{t.about.phase1.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-100">{t.about.phase1.desc}</p>
              </div>
              <div className="rounded-2xl border border-steel-dark bg-steel p-6">
                <div className="font-display text-lg font-semibold text-white">{t.about.phase2.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-100">{t.about.phase2.desc}</p>
              </div>
            </div>
          </div>

          <div className="h-fit rounded-2xl border border-steel-dark bg-steel p-6 sm:p-8">
            <div className="font-display text-lg font-semibold text-white">{t.about.factsheetTitle}</div>
            <dl className="mt-6 space-y-5">
              {t.about.facts.map((f, i) => (
                <div key={i} className="border-t border-neutral-50/10 pt-4 first:border-t-0 first:pt-0">
                  <dt className="text-xs text-neutral-200">{f.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-gold">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyPalu({ t, lang }) {
  return (
    <section id="why" className="scroll-mt-20 bg-charcoal py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-gold sm:text-4xl">{t.why.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-300">{t.why.sub}</p>
          </div>

          <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-steel-dark bg-steel p-2 shadow-sm sm:p-3">
            <iframe
              title="Peta Lokasi Palu, Sulawesi Tengah, Indonesia"
              src="https://www.google.com/maps?q=Palu,+Sulawesi+Tengah,+Indonesia&z=6&output=embed"
              className="h-72 w-full rounded-xl sm:h-80"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
            <div className="mt-2 flex items-center justify-center gap-2 px-1 pb-1 pt-1 text-xs text-neutral-100">
              <span className="h-2 w-2 shrink-0 rounded-full bg-gold"></span>
              {t.why.mapCaption}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyReasons.map((r, i) => {
            const Icon = r.Icon;
            const c = r[lang];
            return (
              <div key={i} className="rounded-2xl border border-steel-dark bg-steel p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-charcoal">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <div className="font-display text-lg font-semibold text-white">{c.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-100">{c.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-steel-dark bg-steel p-6 sm:p-8">
          <div className="mb-5 font-display text-base font-semibold text-white">{t.why.accessTitle}</div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {accessPoints.map((a, i) => {
              const Icon = a.Icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-sm text-neutral-100">{a[lang]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Kawasan({ t, lang }) {
  return (
    <section id="kawasan" className="scroll-mt-20 bg-charcoal py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-gold sm:text-4xl">{t.kawasan.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-300">{t.kawasan.sub}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {kawasanZones.map((z, i) => {
            const Icon = z.Icon;
            return (
              <div key={i} className="flex flex-col items-center gap-3 rounded-2xl border border-steel-dark bg-steel p-5 text-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-charcoal">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <span className="text-sm font-medium text-neutral-100">{z[lang]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Partner({ t, lang }) {
  return (
    <section id="partner" className="scroll-mt-20 bg-charcoal py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <div className="text-sm font-medium text-gold">{t.partner.title}</div>
          <h2 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">{t.partner.name}</h2>
          <p className="mt-2 text-sm text-neutral-400">{t.partner.location}</p>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {t.partner.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-neutral-300">{p}</p>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-gold bg-steel p-6 sm:p-8">
              <div className="font-display text-lg font-semibold text-gold">{t.partner.visionTitle}</div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-100">{t.partner.visionText}</p>
            </div>

            <h3 className="mt-12 font-display text-xl font-semibold text-white">{t.partner.overviewTitle}</h3>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {industryOverview.map((o, i) => {
                const Icon = o.Icon;
                return (
                  <div key={i} className="flex flex-col items-center gap-3 rounded-2xl border border-steel-dark bg-steel p-5 text-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-charcoal">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <span className="text-sm font-medium text-neutral-100">{o[lang]}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="h-fit rounded-2xl border border-steel-dark bg-steel p-6 sm:p-8">
            <div className="font-display text-lg font-semibold text-white">{t.partner.factsheetTitle}</div>
            <dl className="mt-6 space-y-5">
              {t.partner.facts.map((f, i) => (
                <div key={i} className="border-t border-neutral-50/10 pt-4 first:border-t-0 first:pt-0">
                  <dt className="text-xs text-neutral-200">{f.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-gold">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Karir({ t, lang }) {
  return (
    <section id="karir" className="scroll-mt-20 bg-charcoal py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-gold sm:text-4xl">{t.karir.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-300">{t.karir.sub}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {karirFields.map((f, i) => {
            const Icon = f.Icon;
            const c = f[lang];
            return (
              <div key={i} className="rounded-2xl border border-steel-dark bg-steel p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-charcoal">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <div className="font-display text-lg font-semibold text-white">{c.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-100">{c.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl border border-steel-dark bg-steel p-6">
          <HardHat className="h-5 w-5 shrink-0 text-gold" />
          <p className="text-sm text-neutral-100">{t.karir.cta}</p>
        </div>
      </div>
    </section>
  );
}

function Products({ t, lang }) {
  return (
    <section id="products" className="scroll-mt-20 bg-charcoal py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-gold sm:text-4xl">{t.products.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-300">{t.products.sub}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((p, i) => {
            const c = p[lang];
            return (
              <div key={i} className="overflow-hidden rounded-2xl border border-steel-dark bg-steel">
                <div className="flex aspect-[4/3] items-center justify-center bg-charcoal-light">
                  <Image className="h-10 w-10 text-gold" />
                </div>
                <div className="p-6">
                  <div className="font-display text-lg font-semibold text-white">{c.title}</div>
                  <ul className="mt-3 space-y-2.5">
                    {c.items.map((it, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm leading-relaxed text-neutral-100">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold"></span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Certifications({ t, lang }) {
  return (
    <section id="certifications" className="scroll-mt-20 bg-charcoal py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-gold sm:text-4xl">{t.certifications.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-300">{t.certifications.sub}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => {
            const Icon = c.Icon;
            return (
              <div key={i} className="flex items-center gap-4 rounded-2xl border border-steel-dark bg-steel p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-charcoal">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <span className="text-sm font-medium text-neutral-100">{c[lang]}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="rounded-2xl border border-steel-dark bg-steel p-6 sm:p-8 lg:col-span-2">
            <p className="text-sm leading-relaxed text-neutral-100">{t.certifications.achievement}</p>
          </div>
          <div className="rounded-2xl border border-steel-dark p-6 sm:p-8">
            <div className="mb-4 font-display text-sm font-semibold text-white">{t.certifications.projectsTitle}</div>
            <div className="flex flex-wrap gap-2">
              {referenceProjects.map((p, i) => (
                <span key={i} className="rounded-full bg-gold px-3 py-1.5 text-xs font-medium text-charcoal">{p[lang]}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ t, lang }) {
  return (
    <section id="contact" className="scroll-mt-20 bg-charcoal py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-semibold text-gold sm:text-4xl">{t.contact.title}</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-300">{t.contact.sub}</p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-gold" />
                <div>
                  <div className="text-xs text-neutral-400">{t.contact.emailLabel}</div>
                  <div className="text-sm font-medium text-white">xinshengsteelindonesia@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-gold" />
                <div>
                  <div className="text-xs text-neutral-400">{t.contact.locationLabel}</div>
                  <div className="text-sm font-medium text-white">Kawasan Ekonomi Khusus Palu, Sulawesi Tengah, Indonesia</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-5 w-5 text-gold" />
                <div>
                  <div className="text-xs text-neutral-400">{t.contact.partnerLabel}</div>
                  <div className="text-sm font-medium text-white">Shaanxi Iron & Steel Group Co., Ltd., Xi'an, China</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-steel-dark bg-steel p-6 sm:p-8">
            <div className="font-display text-lg font-semibold text-white">{t.contact.accessTitle}</div>
            <div className="mt-6 space-y-4">
              {accessPoints.map((a, i) => {
                const Icon = a.Icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span className="text-sm text-neutral-100">{a[lang]}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SubPageHero({ title, sub, backLabel, onBack }) {
  return (
    <section className="scroll-mt-20 border-b border-steel-dark bg-charcoal pt-28 pb-12 sm:pt-32 sm:pb-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <button onClick={onBack} className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 transition-colors hover:text-gold">
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </button>
        <h1 className="font-display text-3xl font-semibold text-gold sm:text-4xl">{title}</h1>
        {sub && <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-300">{sub}</p>}
      </div>
    </section>
  );
}

function LeadershipPage({ t, lang, goHome }) {
  return (
    <div className="bg-charcoal">
      <SubPageHero title={t.leadership.title} sub={t.leadership.sub} backLabel={t.common.backHome} onBack={goHome} />
      <section className="bg-charcoal py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-3">
            {founders.map((f, i) => (
              <div key={i} className="rounded-2xl border border-steel-dark bg-steel p-8 text-center">
                <img
                  src={f.photo}
                  alt={f.name}
                  className="mx-auto mb-5 h-32 w-32 rounded-full object-cover ring-4 ring-gold sm:h-36 sm:w-36"
                />
                <div className="font-display text-xl font-semibold text-white">{f.name}</div>
                <div className="mt-1 text-sm text-gold">{f[lang].role}</div>
                <div className="mt-3 inline-flex rounded-full bg-charcoal px-3 py-1 text-xs text-neutral-300">{f.nat[lang]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function LicensingStagePage({ t, lang, goHome, stageKey }) {
  const stage = licensingStages.find((s) => s.key === stageKey);
  const phases = stage.phaseIndices.map((idx) => licensingPhases[idx]);
  const statusStyle = {
    done: { Icon: CheckCircle2, text: "text-emerald-400" },
    progress: { Icon: Clock, text: "text-gold" },
    upcoming: { Icon: Circle, text: "text-neutral-400" },
  };

  return (
    <div className="bg-charcoal">
      <SubPageHero title={stage[lang].title} sub={stage[lang].explanation} backLabel={t.common.backHome} onBack={goHome} />
      <section className="bg-charcoal py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-400"></span>{t.licensing.legend.done}</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-gold"></span>{t.licensing.legend.progress}</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-neutral-400"></span>{t.licensing.legend.upcoming}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <CalendarDays className="h-4 w-4" />
              {t.licensing.updated}
            </div>
          </div>

          <div className={`mt-8 grid gap-6 ${phases.length > 1 ? "sm:grid-cols-2" : "max-w-md"}`}>
            {phases.map((phase, i) => (
              <div key={i} className="rounded-2xl border border-steel-dark bg-steel p-6">
                <div className="font-display text-base font-semibold text-white">{phase[lang].title}</div>
                <div className="mt-1 text-xs text-neutral-300">{phase[lang].range}</div>
                <div className="mt-5 space-y-3 border-t border-neutral-50/10 pt-5">
                  {phase.items.map((item, j) => {
                    const s = statusStyle[item.status];
                    const Icon = s.Icon;
                    return (
                      <div key={j} className="flex items-start gap-2.5">
                        <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${s.text}`} />
                        <span className="text-sm leading-snug text-neutral-100">{item[lang]}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function VideoPage({ t, lang, goHome }) {
  return (
    <div className="bg-charcoal">
      <SubPageHero title={t.video.title} sub={t.video.sub} backLabel={t.common.backHome} onBack={goHome} />
      <section className="bg-charcoal py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2">
            {videos.map((v, i) => (
              <div key={i} className="group relative flex aspect-video flex-col items-center justify-center gap-3 rounded-2xl border border-steel-dark bg-steel">
                <span className="absolute right-4 top-4 rounded-full border border-neutral-50/30 px-3 py-1 text-xs text-neutral-200">
                  {t.video.caption}
                </span>
                <PlayCircle className="h-14 w-14 text-gold transition-transform group-hover:scale-110" />
                <span className="font-display text-base font-medium text-white">{v[lang].title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function PhotoPage({ t, lang, goHome }) {
  return (
    <div className="bg-charcoal">
      <SubPageHero title={t.photos.title} sub={t.photos.sub} backLabel={t.common.backHome} onBack={goHome} />
      <section className="bg-charcoal py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {photos.map((p, i) => (
              <div key={i} className="group relative flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-steel-dark bg-steel p-4 text-center">
                <span className="absolute right-3 top-3 rounded-full border border-neutral-50/30 px-2.5 py-0.5 text-[10px] text-neutral-200">
                  {t.photos.caption}
                </span>
                <Image className="h-10 w-10 text-gold transition-transform group-hover:scale-110" />
                <span className="font-display text-sm font-medium text-white">{p[lang].title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function VisiMisiPage({ t, goHome }) {
  return (
    <div className="bg-charcoal">
      <SubPageHero title={t.visiMisi.title} sub={t.visiMisi.sub} backLabel={t.common.backHome} onBack={goHome} />
      <section className="bg-charcoal py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <div className="flex items-start gap-4 rounded-2xl border border-steel-dark bg-steel p-8">
            <Compass className="mt-1 h-7 w-7 shrink-0 text-gold" />
            <div>
              <div className="font-display text-xl font-semibold text-white">{t.visiMisi.visionLabel}</div>
              <p className="mt-3 text-lg leading-relaxed text-neutral-100">{t.visiMisi.visionText}</p>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-gold" />
              <div className="font-display text-xl font-semibold text-white">{t.visiMisi.missionLabel}</div>
            </div>
            <div className="mt-6 space-y-4">
              {t.visiMisi.missionItems.map((m, i) => (
                <div key={i} className="flex items-start gap-4 rounded-2xl border border-steel-dark bg-steel p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-charcoal font-display text-sm font-semibold text-gold">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-neutral-100">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function NewsPage({ t, lang, goHome }) {
  return (
    <div className="bg-charcoal">
      <SubPageHero title={t.berita.title} sub={t.berita.sub} backLabel={t.common.backHome} onBack={goHome} />
      <section className="bg-charcoal py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((n, i) => (
              <Link
                key={i}
                to={`/berita/${n.slug}`}
                className="group overflow-hidden rounded-2xl border border-steel-dark bg-steel transition-colors hover:border-gold"
              >
                <div className="flex aspect-video items-center justify-center bg-charcoal-light">
                  <Newspaper className="h-9 w-9 text-gold" />
                </div>
                <div className="p-5">
                  <span className="font-display text-base font-medium text-white">{n[lang].title}</span>
                  <div className="mt-3 text-sm font-medium text-gold transition-transform group-hover:translate-x-0.5">
                    {t.berita.readMore} →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function NewsDetailPage({ t, lang }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = newsItems.find((n) => n.slug === slug);

  if (!article) {
    return (
      <div className="bg-charcoal">
        <SubPageHero title={t.berita.title} backLabel={t.common.backHome} onBack={() => navigate("/")} />
        <section className="bg-charcoal py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8 lg:px-10">
            <p className="text-neutral-300">
              {lang === "id" ? "Berita tidak ditemukan." : "Article not found."}
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-charcoal">
      <SubPageHero
        title={article[lang].title}
        backLabel={lang === "id" ? "Kembali ke Berita" : "Back to News"}
        onBack={() => navigate("/berita")}
      />
      <section className="bg-charcoal py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 flex aspect-video items-center justify-center rounded-2xl border border-steel-dark bg-steel">
            <Newspaper className="h-12 w-12 text-gold" />
          </div>
          <div className="space-y-5">
            {article[lang].body.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-neutral-300">{p}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Footer({ t }) {
  return (
    <footer className="border-t border-steel-dark bg-charcoal py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8 lg:px-10">
        <div className="flex items-center gap-3">
          <img src={logoMark} alt="Logo Xinsheng Steel Indonesia" className="h-9 w-9 shrink-0 object-contain" />
          <span className="text-sm text-neutral-300">PT Xinsheng Steel Indonesia</span>
        </div>
        <p className="text-xs text-neutral-400">© 2026 PT Xinsheng Steel Indonesia. {t.footer.rights}</p>
      </div>
    </footer>
  );
}

function HomePage({ t, lang, scrollToId }) {
  return (
    <main>
      <Hero t={t} scrollToId={scrollToId} />
      <About t={t} />
      <WhyPalu t={t} lang={lang} />
      <Kawasan t={t} lang={lang} />
      <Partner t={t} lang={lang} />
      <Karir t={t} lang={lang} />
      <Products t={t} lang={lang} />
      <Certifications t={t} lang={lang} />
      <Contact t={t} lang={lang} />
    </main>
  );
}

function AppShell() {
  const [lang, setLang] = useState("id");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];
  const navigate = useNavigate();
  const location = useLocation();
  const pendingScroll = useRef(null);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (location.pathname === "/" && pendingScroll.current) {
      const id = pendingScroll.current;
      pendingScroll.current = null;
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const scrollToId = (targetId) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      pendingScroll.current = targetId;
      navigate("/");
    }
  };

  const goToPage = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  const goHome = () => {
    setMenuOpen(false);
    navigate("/");
  };

  const handleNavClick = (item) => (item.kind === "page" ? goToPage(item.path) : scrollToId(item.id));

  const navStructure = [
    {
      type: "dropdown",
      key: "company",
      label: t.nav.company,
      items: [
        { kind: "anchor", id: "about", label: t.nav.about },
        { kind: "page", path: "/kepemimpinan", label: t.nav.leadership },
        { kind: "anchor", id: "partner", label: t.nav.partner },
        { kind: "anchor", id: "karir", label: t.nav.karir },
        { kind: "page", path: "/visi-misi", label: t.nav.visiMisi },
      ],
    },
    {
      type: "dropdown",
      key: "location",
      label: t.nav.location,
      items: [
        { kind: "anchor", id: "why", label: t.nav.why },
        { kind: "anchor", id: "kawasan", label: t.nav.kawasan },
      ],
    },
    {
      type: "dropdown",
      key: "licensing",
      label: t.nav.licensing,
      items: licensingStages.map((s) => ({ kind: "page", path: s.path, label: s[lang].title })),
    },
    { type: "link", kind: "anchor", id: "products", label: t.nav.products },
    {
      type: "dropdown",
      key: "media",
      label: t.nav.media,
      items: [
        { kind: "page", path: "/video", label: t.nav.video },
        { kind: "page", path: "/foto", label: t.nav.photos },
      ],
    },
    { type: "link", kind: "page", path: "/berita", label: t.nav.berita },
    { type: "link", kind: "anchor", id: "contact", label: t.nav.contact },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-charcoal font-body text-neutral-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-steel-dark bg-charcoal">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">
          <button onClick={() => scrollToId("home")} className="flex items-center gap-3">
            <img src={logoMark} alt="Logo Xinsheng Steel Indonesia" className="h-11 w-11 shrink-0 object-contain" />
            <span className="text-left leading-tight">
              <span className="block font-display text-base font-semibold text-white sm:text-lg">Xinsheng Steel</span>
              <span className="block text-xs tracking-wide text-neutral-400">Indonesia</span>
            </span>
          </button>

          <nav className="hidden items-center gap-5 lg:flex">
            {navStructure.map((item) =>
              item.type === "link" ? (
                <button
                  key={item.id || item.path}
                  onClick={() => handleNavClick(item)}
                  className="whitespace-nowrap text-sm font-medium text-neutral-200 transition-colors hover:text-gold"
                >
                  {item.label}
                </button>
              ) : (
                <div key={item.key} className="group relative">
                  <button className="flex items-center gap-1 whitespace-nowrap text-sm font-medium text-neutral-200 transition-colors hover:text-gold">
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                    <div className="flex min-w-[170px] flex-col overflow-hidden rounded-xl border border-steel-dark bg-steel p-1.5 shadow-lg">
                      {item.items.map((sub) => (
                        <button
                          key={sub.id || sub.path}
                          onClick={() => handleNavClick(sub)}
                          className="rounded-lg px-3 py-2 text-left text-sm font-medium text-neutral-100 transition-colors hover:bg-charcoal hover:text-gold"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-1 rounded-full border border-neutral-50/20 p-1 sm:flex">
              <Globe className="ml-2 h-3.5 w-3.5 text-neutral-400" />
              <button
                onClick={() => setLang("id")}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${lang === "id" ? "bg-gold text-charcoal" : "text-neutral-300 hover:text-white"}`}
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${lang === "en" ? "bg-gold text-charcoal" : "text-neutral-300 hover:text-white"}`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="rounded-lg border border-neutral-50/20 p-2 text-neutral-200 lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-steel-dark bg-charcoal px-5 py-4 lg:hidden">
            <div className="mb-4 flex w-fit items-center gap-1 rounded-full border border-neutral-50/20 p-1">
              <button onClick={() => setLang("id")} className={`rounded-full px-3 py-1 text-xs font-semibold ${lang === "id" ? "bg-gold text-charcoal" : "text-neutral-300"}`}>ID</button>
              <button onClick={() => setLang("en")} className={`rounded-full px-3 py-1 text-xs font-semibold ${lang === "en" ? "bg-gold text-charcoal" : "text-neutral-300"}`}>EN</button>
            </div>
            <div className="flex flex-col gap-1">
              {navStructure.map((item) =>
                item.type === "link" ? (
                  <button
                    key={item.id || item.path}
                    onClick={() => handleNavClick(item)}
                    className="rounded-lg px-2 py-2.5 text-left text-sm font-medium text-neutral-200 hover:bg-neutral-50/10 hover:text-gold"
                  >
                    {item.label}
                  </button>
                ) : (
                  <div key={item.key} className="pt-2">
                    <div className="px-2 pb-1 text-xs font-semibold text-neutral-400">{item.label}</div>
                    {item.items.map((sub) => (
                      <button
                        key={sub.id || sub.path}
                        onClick={() => handleNavClick(sub)}
                        className="block w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium text-neutral-200 hover:bg-neutral-50/10 hover:text-gold"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </header>

      <Routes>
        <RouterRoute path="/" element={<HomePage t={t} lang={lang} scrollToId={scrollToId} />} />
        <RouterRoute path="/kepemimpinan" element={<LeadershipPage t={t} lang={lang} goHome={goHome} />} />
        <RouterRoute path="/perizinan" element={<LicensingStagePage t={t} lang={lang} goHome={goHome} stageKey="perizinan" />} />
        <RouterRoute path="/pra-konstruksi" element={<LicensingStagePage t={t} lang={lang} goHome={goHome} stageKey="pra-konstruksi" />} />
        <RouterRoute path="/konstruksi" element={<LicensingStagePage t={t} lang={lang} goHome={goHome} stageKey="konstruksi" />} />
        <RouterRoute path="/operasi" element={<LicensingStagePage t={t} lang={lang} goHome={goHome} stageKey="operasi" />} />
        <RouterRoute path="/video" element={<VideoPage t={t} lang={lang} goHome={goHome} />} />
        <RouterRoute path="/foto" element={<PhotoPage t={t} lang={lang} goHome={goHome} />} />
        <RouterRoute path="/visi-misi" element={<VisiMisiPage t={t} goHome={goHome} />} />
        <RouterRoute path="/berita" element={<NewsPage t={t} lang={lang} goHome={goHome} />} />
        <RouterRoute path="/berita/:slug" element={<NewsDetailPage t={t} lang={lang} />} />
      </Routes>

      <Footer t={t} />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  );
}
