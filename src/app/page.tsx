import Hero from "../../components/Hero";
import Container from "../../components/Container";

export const metadata = {
  title: "ホーム",
  openGraph: {
    title: "ホーム",
  },
};

export default function Home() {
  return (
    <Container>
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
    </Container>
  );
}
