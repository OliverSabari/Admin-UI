

export const MEMBERS_API = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json" 

export const MEMBERS_PER_PAGE = 10


export const membersToDisplay = (membersData,currentPage) => {
    const lastIndex = currentPage * MEMBERS_PER_PAGE
    const firstIndex = lastIndex - MEMBERS_PER_PAGE
    return membersData.slice(firstIndex , lastIndex)
}