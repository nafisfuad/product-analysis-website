import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3>Question: What is Context API and it's purpose?</h3>
            <p>Answer: Context basically provides an way to pass the data to a component without Props Drilling. For example, if we need to pass any data to another component, we'll pass it through props and if it requires by it's child component then it goes on again. Context API solves this problem. Just need a Provider to get that.</p>
            <h3>Question: What are semantic elements?</h3>
            <p>Answer: Semantic Elements are HTML tags that describes specificially what does that element contains. It helps both browser and developers to understand things underlying. For example before there were div tag which will not help what inside it's by just seeing but today we hav header, nav, section, article etc which don't need any descriptioin.</p>
        </div>
    );
};

export default Blogs;