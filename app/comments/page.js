"use client";
import Header from './Header';
import Footer from './Footer';
import {useEffect, useState} from "react";

export default function Comment() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('/api/get-comments')
            .then((response) => response.json())
            .then((data) => {
                setComments(data.comments || []);
            })
            .catch((error) => console.error('Error fetching comments:', error));
    }, []);

    return (
        <div>
            <Header />

            <main>
                <h1>Comments</h1>
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>
                            {comment.comment} - {comment.username}
                        </li>
                    ))}
                </ul>
            </main>

            <Footer />
        </div>
    );
}