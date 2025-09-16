import ResultDetail from "@/containers/ui/detail";

type Props = {
  params: { id: string };
};

export default function ResultDetailPage({ params }: Props) {
  const { id } = params;
  return <ResultDetail id={params.id} />;
}
