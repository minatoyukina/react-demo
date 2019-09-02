import React from "react"
import Stomp from 'stompjs'
import SockJS from 'sockjs-client'
import './style.css'

const colors = [
    '#2196F3', '#32c787', '#00BCD4', '#ff5652',
    '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
];

export default class WSApp extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.stompClient = null;
        this.username = null
    }

    connect = event => {
        event.preventDefault();
        this.username = document.querySelector('#name').value.trim();
        if (this.username) {
            const usernamePage = document.querySelector('#username-page');
            const chatPage = document.querySelector('#chat-page');
            usernamePage.classList.add('hidden');
            chatPage.classList.remove('hidden');
            let socket = new SockJS('/api/ws');
            this.stompClient = Stomp.over(socket);
            this.stompClient.connect({}, this.onConnected, this.onError);
        }
    };

    onConnected = () => {
        this.stompClient.subscribe('/topic/public', this.onMessageReceived);
        this.stompClient.send("/app/chat.addUser",
            {},
            JSON.stringify({sender: this.username, type: 'JOIN'})
        );
        const connectingElement = document.querySelector('.connecting');
        connectingElement.classList.add('hidden');
    };

    onError = () => {
        const connectingElement = document.querySelector('.connecting');
        connectingElement.textContent = 'Could not connect to WebSocket server. Please refresh this page to try again!';
        connectingElement.style.color = 'red';
    };

    sendMessage = (event) => {
        event.preventDefault();
        const messageInput = document.querySelector('#message');
        const messageContent = messageInput.value.trim();
        if (messageContent && this.stompClient) {
            const chatMessage = {
                sender: this.username,
                content: messageInput.value,
                type: 'CHAT'
            };
            this.stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage));
            messageInput.value = '';
        }
    };

    onMessageReceived = (payload) => {
        const message = JSON.parse(payload.body);
        const messageElement = document.createElement('li');
        if (message.type === 'JOIN') {
            messageElement.classList.add('event-message');
            message.content = message.sender + ' joined!';
        } else if (message.type === 'LEAVE') {
            messageElement.classList.add('event-message');
            message.content = message.sender + ' left!';
        } else {
            messageElement.classList.add('chat-message');
            const avatarElement = document.createElement('i');
            const avatarText = document.createTextNode(message.sender[0]);
            avatarElement.appendChild(avatarText);
            avatarElement.style['background-color'] = this.getAvatarColor(message.sender);
            messageElement.appendChild(avatarElement);
            const usernameElement = document.createElement('span');
            const usernameText = document.createTextNode(message.sender);
            usernameElement.appendChild(usernameText);
            messageElement.appendChild(usernameElement);
        }
        const textElement = document.createElement('p');
        const messageText = document.createTextNode(message.content);
        const messageArea = document.querySelector('#messageArea');
        textElement.appendChild(messageText);
        messageElement.appendChild(textElement);
        messageArea.appendChild(messageElement);
        messageArea.scrollTop = messageArea.scrollHeight;
    };


    getAvatarColor = (messageSender) => {
        let hash = 0;
        for (let i = 0; i < messageSender.length; i++) {
            hash = 31 * hash + messageSender.charCodeAt(i);
        }
        let index = Math.abs(hash % colors.length);
        return colors[index];
    };

    render() {
        return (
            <div id='chat'>
                <div id="username-page">
                    <div className="username-page-container">
                        <h1 className="title">Type your username</h1>
                        <form id="usernameForm" name="usernameForm" onSubmit={this.connect}>
                            <div className="form-group">
                                <input type="text" id="name" placeholder="Username" autoComplete="off"
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="accent username-submit">Start Chatting</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="chat-page" className="hidden">
                    <div className="chat-container">
                        <div className="chat-header">
                            <h2>Spring WebSocket Chat Demo</h2>
                        </div>
                        <div className="connecting">
                            Connecting...
                        </div>
                        <ul id="messageArea">
                        </ul>
                        <form id="messageForm" name="messageForm" onSubmit={this.sendMessage}>
                            <div className="form-group">
                                <div className="input-group clearfix">
                                    <input type="text" id="message" placeholder="Type a message..." autoComplete="off"
                                           className="form-control"/>
                                    <button type="submit" className="primary">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}