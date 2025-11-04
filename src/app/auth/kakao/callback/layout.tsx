import AuthGuard from "@/components/AuthGuard";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>;
}