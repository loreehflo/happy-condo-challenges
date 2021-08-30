import { Component } from 'react';
import axios from 'axios';
import UserCard from './user-card.component';

class UserTemplate extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    async componentDidMount() {

        // axios.get('https://randomuser.me/api/?results=12')
        //     .then((response) => {
        //         this.setState({ users: response.data.results })
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        const response = await axios.get('https://randomuser.me/api/?results=12')
        this.setState({ users: response.data.results })
    }

    render() {
        return (
            <div class="container">
                <div class="row align-items-start">
                    {
                        this.state.users.map((user, index) => {
                            return (
                                <UserCard name={`${user.name.first} ${user.name.last}`} gender={user.gender} location={user.location.city}
                                    picture={user.picture.medium} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }

}

export default UserTemplate;

