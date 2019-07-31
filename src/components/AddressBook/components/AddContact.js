import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import axios from 'axios'
import {
	Dialog,
	TextField,
	Grid,
	Button,
} from '@material-ui/core'

const useStyles = makeStyles({
	textCont: {
		padding: '0 8px',
	}
})

export default function AddContact(props){
	const classes = useStyles()
	const { addDialog, setAddDialog, user, contacts, setContacts } = props
	const [first_name, setFname] = useState('')
	const [last_name, setLname] = useState('')
	const [home_phone, setHphone] = useState('')
	const [mobile_phone, setMphone] = useState('')
	const [work_phone, setWphone] = useState('')
	const [email, setEmail] = useState('')
	const [city, setCity] = useState('')
	const [state_or_province, setProvince] = useState('')
	const [postal_code, setPostal] = useState('')
	const [country, setCountry] = useState('')

	const handleAddContact = e => {
		e.preventDefault()
		axios
			.post('http://localhost:3001/api/contacts/create', {
				userid: user.id,
				first_name, 
				last_name, 
				home_phone, 
				mobile_phone,
				work_phone,
				email,
				city,
				state_or_province,
				postal_code,
				country,
			})
			.then(res => {
				setContacts([...contacts, res.data])
				setAddDialog(false)
			})
	}

	const handleEditToggle = () => {
		console.log('test')
	}

	return (
		<Dialog open={addDialog} onClose={()=>setAddDialog(false)} style={{padding: 8}}>
			<form onSubmit={e => handleAddContact(e)}>
			<Grid container direction="column" style={{padding: 16}}>
				<Grid container item md={12}>
					<Grid item md={6} xs={12} className={classes.textCont}>
						<TextField 
							required
							margin="normal"
							label="First Name"
							margin="normal"
			        variant="outlined"
			        fullWidth
			        value={first_name}
			        onChange={e=>setFname(e.target.value)}
						/>
					</Grid>
					<Grid item md={6} xs={12} className={classes.textCont}>
						<TextField 
							required
							label="Last Name"
							margin="normal"
			        variant="outlined"
			        fullWidth
			        value={last_name}
			        onChange={e=>setLname(e.target.value)}
						/>
					</Grid>
				</Grid>

				<Grid container item md={12}>
					<Grid item md={4} xs={12} className={classes.textCont}>
						<TextField 
							label="Home Phone"
							margin="normal"
			        variant="outlined"
			        fullWidth
			        value={home_phone}
			        onChange={e=>setHphone(e.target.value)}
						/>
					</Grid>
					<Grid item md={4} xs={12} className={classes.textCont}>
						<TextField
							label="Mobile Phone"
							margin="normal"
			        variant="outlined"
			        fullWidth
			        value={mobile_phone}
			        onChange={e=>setMphone(e.target.value)}
						/>
					</Grid>
					<Grid item md={4} xs={12} className={classes.textCont}>
						<TextField
							label="Work Phone"
							margin="normal"
			        variant="outlined"
			        fullWidth
			        value={work_phone}
			        onChange={e=>setWphone(e.target.value)}
						/>
					</Grid>
				</Grid>

				<Grid container item md={12} className={classes.textCont}>
					<TextField 
						label="Email"
						margin="normal"
		        variant="outlined"
		        fullWidth
		        value={email}
		        onChange={e=>setEmail(e.target.value)}
					/>
				</Grid>

				<Grid container item md={12}>
					<Grid item md={6} xs={12} className={classes.textCont}>
						<TextField
							label="City"
							margin="normal"
			        variant="outlined"
			        fullWidth
			        value={city}
			        onChange={e=>setCity(e.target.value)}
						/>
					</Grid>
					<Grid item md={6} xs={12} className={classes.textCont}>
						<TextField
							label="State or Province"
							margin="normal"
			        variant="outlined"
			        fullWidth
			        value={state_or_province}
			        onChange={e=>setProvince(e.target.value)}
						/>
					</Grid>
				</Grid>

				<Grid container item md={12}>
					<Grid item md={6} xs={12} className={classes.textCont}>
						<TextField 
							label="Postal Code"
							margin="normal"
			        variant="outlined"
			        fullWidth
			        value={postal_code}
			        onChange={e=>setPostal(e.target.value)}
						/>
					</Grid>
					<Grid item md={6} xs={12} className={classes.textCont}>
						<TextField
							label="Country"
							margin="normal"
			        variant="outlined"
			        fullWidth
			        value={country}
			        onChange={e=>setCountry	(e.target.value)}
						/>
					</Grid>
				</Grid>
				<Button 
					style={{margin: 8}} 
					variant="contained" 
					color="primary"
					type="submit"
					>
						add contact
					</Button>
			</Grid>
			</form>
		</Dialog>
	)
}