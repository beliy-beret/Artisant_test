export interface Response {
  status: string;
  data: {
    products: Array<Product>
  };
}

export type Product = {
  product_id: number,
  name: string,
  description: string
  quantity: number
  initial_price: number
  type: string
  avatar: Photos
  other_file: { original: string }
  additional_photos: Array<Photos>
  created_by: Author
  json_nft_data: Json_nft_data
  json_nft_link: string
  tx_status: string
  created_at: string
  updated_at: string
  quantity_nfts_created: number
  on_main_page: boolean
  is_wearable: boolean
  latest_price: string
  quantity_available: number
}

type Attributes = Record<'value' | 'trait_type', string>

type Photos = Record<'original' | 'compressed', string>

type Author = {
  user_id: number
  display_name: string
  public_address: string
  custom_url: string
  image: Photos
}

type Json_nft_data = {
  name: string
  image: string
  attributes: Array<Attributes>
  description: string
  external_url: string
}




