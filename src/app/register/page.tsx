import CreateUserForm from '@/components/register/create-user-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default async function Register() {
  return (
    <main className='flex flex-col items-center p-8 w-full h-full'>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Create your account to start writting.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreateUserForm />
        </CardContent>
      </Card>
    </main>
  );
}
