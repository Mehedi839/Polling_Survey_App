const getStoredDonationDetail = () =>{
    const storedDonation = localStorage.getItem('data.json');
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}


const saveDonateDetail = id =>{
    const storedDonations = getStoredDonationDetail();
    const exists = storedDonations.find(DonateId => DonateId === id);
    if(!exists){
        storedDonations.push(id);
        localStorage.setItem('data.json', JSON.stringify(storedDonations))
    }
}

export { getStoredDonationDetail, saveDonateDetail}