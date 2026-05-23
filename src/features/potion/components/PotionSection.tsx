import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function PotionSection({ title, children }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xs text-purple-300">{title}</CardTitle>
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}
