import LoginForm from '@/components/login/login-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
export default async function Login() {
  return (
    <main className='flex flex-col items-center p-8 w-full h-full'>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Log in to your account</CardTitle>
          <CardDescription>
            And start exploring and collaborating.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  );
}
