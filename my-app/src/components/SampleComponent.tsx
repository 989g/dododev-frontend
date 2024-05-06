interface SampleComponentProps {
  text: string;
}

const SampleComponent: React.FC<SampleComponentProps> = ({ text }) => {
  return (
    <div>
      <h2>Sample Component</h2>
      <p>{text}</p>
    </div>
  );
};

export default SampleComponent;
