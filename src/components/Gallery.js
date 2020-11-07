import "../css/gallery.css";
import React from "react";
import { useState } from "react";
import ImageCard from "../subcomponents/ImageCard";

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
  ]);
  const photos = images.map((image) => {
    return <ImageCard key={image} image={image} />;
  });
  return (
    <div>
      <div className="image-list">{photos}</div>
    </div>
  );
};
export default Gallery;
