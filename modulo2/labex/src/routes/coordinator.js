
export const goBack =(navigate) =>{
    navigate(-1)
}

//HomePage
export const goToListTrips = (navigate) =>{

    navigate('/trips/list')
}

export const goToLogin = (navigate) =>{
    navigate('/login')

}

//ListTrips

export const goToApplication = (navigate) =>{
    navigate('/trips/application')
}

//Login

export  const goToAdmin =(navigate) =>{
    navigate('/admin/trips/list')
};

export  const goToHome =(navigate) =>{
    navigate('/')
};

export const goToCreateTrip = (navigate) =>{
    navigate('../admin/trips/create')
}

export const goToDetails = (navigate) =>{
    navigate('../admin/trips/:id')
}