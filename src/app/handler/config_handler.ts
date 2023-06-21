import { collection, getDoc, getDocs, query } from "firebase/firestore"
import { db } from "./firebase"

const getSettingsData=async()=>{
  const settingCol=  collection(db,'settings')
  const q=query(settingCol)
  const docs=await getDocs(q)
  const settingData=docs.docs[0].data();

}

export {
    getSettingsData
}