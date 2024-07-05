'use server'

import { createClient } from '../../lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function productAdd(formData: FormData) {
  const supabase = createClient()

  const product = {
    category: formData.get('category') as string,
    productname: formData.get('productName') as string,
    amount: formData.get('amount') as string,
    status: formData.get('status') as string,
  }

  const { error, data, count, status } = await supabase
    .from('products')
    .insert([product])

  if (status === 201) {
    revalidatePath('/', 'layout')
    // redirect('/products')
    return { success: true }
  } else {
    return { success: false, error: 'Failed to add product' }
  }
}

export async function productEdit(formData: FormData, id: string) {
  const supabase = createClient()
  const product = {
    category: formData.get('category') as string,
    productname: formData.get('productName') as string,
    amount: formData.get('amount') as string,
    status: formData.get('status') as string,
  }

  const { error, data, count, status } = await supabase
    .from('products')
    .update([product])
    .eq('id', id)

  if (status === 204) {
    revalidatePath('/', 'layout')
    return { success: true }
  } else {
    return { success: false, error: 'Failed to add product' }
  }
}

export async function productDelete(id: string) {
  const supabase = createClient()
  const { error, data, count, status } = await supabase
    .from('products')
    .delete()
    .eq('id', id)

  if (status === 204) {
    revalidatePath('/', 'layout')
    return { success: true }
  } else {
    return { success: false, error: 'Failed to add product' }
  }
}
