import "../css/gallery.css";
import React from "react";
import { useState } from "react";
import ImageCard from "../subcomponents/ImageCard";
import "../css/menu.css";

const Gallery = () => {
  const [images] = useState([
    "1iosVxsmLr1MMQjVYgJvmpKf-ehomkcCn",
    "1irOXdkwyVEYFuPTr0MAcOjlGJ2smTMra",
    "1ingn-5yJg2Ag1odLaHbs5OLBJeWE5rEO",
    "1ivCcC79elkUHBnFkx41adGXneIEYcFiD",
    "1Z2tPF9Rijxcfo2HEq22HN0gZKHEDB2nB",
    "1YpAZ4hkl5ZR5zoHFux-qe0HwEhQVv0b4",
    "1QbYSPqnSEvU942XzLNwKSiNg-6Dut6uh",
    "1Q_cgx2Cfj6NHA65PgEzAPVbPsYQBMdsD",
    "1aF2x9b8ztjkrCsSw8xg_dxhaev7PuDSk",
    "1JiXXr1BTX2yNzG5qtSLj6cAuNl23Zzmr",
    "1JiXXr1BTX2yNzG5qtSLj6cAuNl23Zzmr",
    "1pcUjmirMmcTpQFCVge8y3fAtcT4gfp0W",
    "1G-k9egHWULBNvNzLbyOqW9QRYodaEvrJ",
    "1JiXXr1BTX2yNzG5qtSLj6cAuNl23Zzmr",
    "1ZVcXuolsAVbiiGBFHF1cWTGRinAB7NMb",
    "1_64iNZfIGiWSqSUFyLJt4aiTei0VRtWr",
    "1ZUwMRFzB2icpDiLCcGbBS6Hv4gHt128O",
    "1ZfZ3i8D5I0H9CRovSR8i_oEvOvTa6FSD",
    "1Qud1fgD_Ro-lp3zris10-JrgnZJuf0RA",
    "1a6U_UWrxLkvLfDWYJub9Q-MJfXUB-kSX",
    "1aDNrLPMOEQ92QqcnfOlSQdzVo_Z-fVm4",
    "1a6j1cN7BNwc9Dykr2rPJFDUWAzI9ijnw",
    "1ahv-Y0_InTM3mjLrVXypGWFMzR5-SsYA",
  ]);
  const photos = images.map((image) => {
    return <ImageCard key={image} image={image} />;
  });
  return (
    <div className="mainpageStyle">
      <div className="image-list">{photos}</div>
    </div>
  );
};
export default Gallery;
