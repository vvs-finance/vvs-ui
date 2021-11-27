
import { FARM_CLIENT } from 'config/constants/endpoints'
import { UserHarvestedRecord, UserHarvestedResponse } from 'config/constants/types'
import request, { gql } from 'graphql-request'

export const getUsersHarvestedData = async (address: string): Promise<{ user?: UserHarvestedRecord; error: boolean }> => {
  try {
    const query = gql`
      query users($address: Bytes!) {
        users(where:{id: $address}) {
          totalClaimAmount
          totalVVSVaultProfit
        }
      }
    `
    const { users } = await request<UserHarvestedResponse>(FARM_CLIENT, query, {
      address,
    })
    if (users && users.length === 1) {
      return { user: users[0], error: false }
    }
    return { error: true }
  } catch (error) {
    console.error('Failed to fetch users harvested data', error)
    return { error: true }
  }
}
