import React from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const UserDetailedSidebar = ({currentUser, followUser, profile, isFollowing, unfollowUser}) => {
  return (
    <Grid.Column width={4}>
                    <Segment>
                      {currentUser && <Button as={Link} to='/settings' color='teal' fluid basic content='Edit Profile'/>}
                      {!currentUser && !isFollowing &&
                        (<Button onClick={()=> followUser(profile)}  color='teal' fluid basic content='Follow User'/>)
                      }
                      
                      {!currentUser && isFollowing &&
                      (<Button onClick={()=> unfollowUser(profile)}  color='teal' fluid basic content='Unfollow'/>)
                    }
                        
                    </Segment>
    </Grid.Column>
  
  )
}

export default UserDetailedSidebar