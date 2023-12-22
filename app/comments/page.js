"use client";
import Header from './Header';
import Footer from './Footer';
import {useState} from "react";
import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json());

const Comment = () => {
    const [comment, setComment] = useState('');
    const [username, setUsername] = useState('');
    const {
        data: comments,
        isLoading,
        isError: error
    } = useSWR('/api/get-comments', fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    if (error) {
        return <p>Failed to fetch</p>;
    }
    if (isLoading) {
        return <p>Loading comments</p>;
    }

    function handleSubmit(e) {
        e.preventDefault();

        const postData = async () => {
            const newComment = {
                comment: comment,
                username: username,
            }

            const response = await fetch('/api/add-comment', {
                    method: 'COMMENT',
                    body: JSON.stringify(newComment),
                })
                return response.json()
        }

        postData().then(data => {
            console.log(JSON.stringify(data));
        })
    }


    return (
        <div>
            <main>
                <Header/>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor='username'>Username </label>
                    <input
                        id='username'
                        type='text'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='comment'>Comment </label>
                    <input
                        id='comment'
                        type='text'
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                </div>

                <button type='submit'>Submit</button>
            </form>
            <ul>
                {Array.isArray(comments) && comments.map((comment, index) => (
                    <li key={index}>
                        {comment.username} {comment.comment}
                    </li>
                ))}
            </ul>
                <Footer/>
            </main>
        </div>
    );
};

export default Comment;