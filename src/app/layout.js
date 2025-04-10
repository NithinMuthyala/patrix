import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/fontawesome.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
        <script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        {children}
        <script src="assets/vendors/js/glightbox.min.js"></script>

        {/* <script type="text/javascript">
          const lightbox = GLightbox({
            'touchNavigation': true,
          'href': 'https://www.youtube.com/watch?v=J9lS14nM1xg',
          'type': 'video',
          'source': 'youtube', //vimeo, youtube or local
          'width': 900,
          'autoPlayVideos': 'true',
})

        </script> */}
        <script src="assets/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
