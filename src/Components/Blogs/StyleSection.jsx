import React from "react";

const StyledSection = () => {
  // Content data defined as an object
  const content = {
    heading: "Eu Ridiculus Fringilla Aenean",
    paragraphs: [
      `Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque 
      vulputate dolor eget dapibus. Nec vitae eros ullamcorper laoreet dapibus 
      mus ac ante viverra. A aenean sit augue curabitur et parturient nisi sed 
      enim. Nulla nec quis sit quisque sem commodo ultricies neque. Lorem eget 
      venenatis dui ante luctus ultricies tellus montes. Quis in sapien tempus.`,
      `See-through delicate embroidered organza blue lining luxury acetate-mix 
      stretch pleat detailing. Leather detail shoulder constrastic colour contour 
      stunning silhouette working peplum. Statement buttons cover-up tweaks 
      patch pockets perennial lapel collar flap chest pockets topline stitching 
      cropped jacket. Effortless comfortable full leather lining eye-catching 
      unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished 
      finish elegant court shoe work duty stretchy slingback strap mid kitten 
      heel this ladylike design.`,
    ],
    bulletPoints: [
      "Crisp fresh iconic elegant timeless clean perfume",
      "Neck straight sharp silhouette and dart detail",
      "Machine wash cold slim fit premium stretch selvedge denim comfortable low waist",
    ],
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 font-sans">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide text-black">
        {content.heading}
      </h1>

      {/* Paragraphs */}
      {content.paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="text-black leading-relaxed text-sm sm:text-base md:text-lg"
        >
          {paragraph}
        </p>
      ))}

      {/* Bullet Points */}
      <ul className="space-y-2 text-black list-disc list-inside sm:ml-4 md:ml-8">
        {content.bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default StyledSection;
