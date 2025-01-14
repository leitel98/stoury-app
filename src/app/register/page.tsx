import CreateUserForm from '@/components/register/create-user-form';

export default async function Register() {
  return (
    <main className='flex p-8 justify-center w-full h-full'>
      <CreateUserForm />
    </main>
  );
}
