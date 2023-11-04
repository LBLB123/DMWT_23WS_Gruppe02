"use client";
import Header from './Header';
import Footer from './Footer';
import {useEffect, useState} from "react";

export default function Comment() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((data) => {
                const firstTenComments = data.slice(0, 10);
                setComments(firstTenComments);
            });
    }, []);

    return (
        <div>
            <Header />

            <main>
                <h1>comment</h1>
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>
                            {comment.name}: {comment.body}
                        </li>
                    ))}
                </ul>
                <h1>g</h1>
            </main>
            <Footer />
        </div>
    );
}
