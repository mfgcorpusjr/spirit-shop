type Props = {
  title: string;
  description: string;
};

export default function Heading({ title, description }: Props) {
  return (
    <div>
      <h3 className="text-3xl text-purple-300 font-bold tracking-tight">
        {title}
      </h3>

      <p className="text-sm">{description}</p>
    </div>
  );
}
