import React from 'react'
import { Grid } from 'antd-mobile';

class AvatarSelector extends React.Component{
   
    render(){
        const avatarList = 'wk,plf,bjt,xy,fls'.split(',').map(v=>({
                icon: require(`../../resoure/img/${v}.png`),
                text: v
            }))
        return (
            <div>
                <Grid data={avatarList} columnNum={5}>

                </Grid>
            </div>
        )
    }
}

export default AvatarSelector