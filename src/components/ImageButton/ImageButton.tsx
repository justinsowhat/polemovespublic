interface ImageButtonProps {
  imageUrl: string;
  link: string;
}

export const ImageButton = ({ imageUrl, link }: ImageButtonProps) => {
  return (
    <div className="image-button">
      <a href={link} className="image-button-link">
        <img src={imageUrl} alt="Download on App Store" />
      </a>
    </div>
  );
};
