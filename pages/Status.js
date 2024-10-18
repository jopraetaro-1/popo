import { useRouter } from 'next/router';

const Status = () => {
  const router = useRouter();
  const { message } = router.query; // Get message from query parameters

  return (
    <div>
      <h1>Payment Status</h1>
      {message === 'thanks' ? (
        <p>Thank you for purchasing our shirts!</p>
      ) : (
        <p>Invalid payment status.</p>
      )}
    </div>
  );
};

export default Status;
