export const apiCall = async (link) => { 
  const res = await fetch(link)
  return res.json()
}