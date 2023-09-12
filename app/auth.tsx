import axios from "axios";
import { useRouter } from 'next/navigation';

const userauth = async () => {
  try {
    const {data} = await axios.get('/api/auth/user');
    return {
      ...data, authorized: true
    }
  } catch (err) {
    console.log("Err ", err)
    return {
      authorized: false
    }
  }
}
const adminauth = async () => {
  try {
    const {data} = await axios.get('/api/auth/user');
    return {
      ...data, authorized: true
    }
  } catch (err) {
    console.log("Err ", err)
    return {
      authorized: false
    }
  }
}

export {adminauth, userauth}