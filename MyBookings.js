import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase"; // <-- Updated import path
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user) return;

      try {
        setLoading(true);
        const bookingsRef = collection(db, "bookings");
        const q = query(bookingsRef, where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);

        const userBookings = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBookings(userBookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchBookings();
  }, [user]);

  return (
    <div>
      <h2>My Bookings</h2>

      {loading ? (
        <p>Loading your bookings...</p>
      ) : !user ? (
        <p>Please log in to view your bookings.</p>
      ) : bookings.length > 0 ? (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              <strong>Service:</strong> {booking.service} <br />
              <strong>Date:</strong> {booking.date} <br />
              <strong>Time:</strong> {booking.time} <br />
              <strong>Contact:</strong> {booking.contact}
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
}

export default MyBookings;
