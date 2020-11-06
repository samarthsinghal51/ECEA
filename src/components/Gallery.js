import "../css/gallery.css";
import React from "react";
import { useState } from "react";
import ImageCard from "../subcomponents/ImageCard";

const Gallery = () => {
  const [images] = useState([
    "apl.jpg",
    "apprentice ship.jpg",
    "bhoomerang1.jpg",
    "ece decoded.jpg",
    "electronova.jpg",
    "freshers.jpg",
    "gre.jpg",
    "inaugral.png",
    "know your branch.jpg",
    "techexcellence.jpg",
    "verilog.jpg",
    "vocatronics.jpg",
    "apl.jpg",
    "apprentice ship.jpg",
    "bhoomerang1.jpg",
    "ece decoded.jpg",
    "electronova.jpg",
    "freshers.jpg",
    "gre.jpg",
    "inaugral.png",
    "know your branch.jpg",
    "techexcellence.jpg",
    "verilog.jpg",
    "vocatronics.jpg",
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
