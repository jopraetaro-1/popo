import { useState } from 'react'; // Import useState for managing state
import { Bar } from 'react-chartjs-2';
import Head from 'next/head';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  // State to handle review submission
  const [review, setReview] = useState('');
  const [feedback, setFeedback] = useState(''); // State to hold feedback message

  // Example data for the shirts sold each month
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Shirts Sold',
        data: [10, 20, 30, 25, 15, 50, 60, 40, 45, 35, 55, 70], // Example data for sales
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Shirts Sold per Month',
      },
    },
  };

  // Handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setFeedback('Thanks for your feedback!'); // Show feedback message
    setReview(''); // Clear the input field
  };

  return (
    <>
      <Head>
        <title>Dashboard | jopraetaro</title>
      </Head>

      <div style={{ width: '80%', margin: '0 auto' }}>
        <h1>Dashboard</h1>

        {/* Bar Chart for Shirt Sales */}
        <Bar data={data} options={options} />

        {/* Review Box */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <h2>Leave a Review</h2>
          <form onSubmit={handleReviewSubmit}>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Type your review here..."
              style={{ width: '300px', height: '100px', padding: '10px', fontSize: '16px' }}
              required
            ></textarea>
            <br />
            <button type="submit" style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Add Review
            </button>
          </form>

          {/* Display feedback message */}
          {feedback && <p style={{ marginTop: '20px', color: 'green' }}>{feedback}</p>}
        </div>
      </div>
    </>
  );
}
