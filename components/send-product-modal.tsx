"use client"

import React from 'react'
import Modal from './ui/modal';
import useSendProduct from '@/hooks/use-send-product-modal';
import * as z from 'zod'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import Heading from "./ui/heading";
import { Separator } from "./ui/separator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from './ui/input';
import { Textarea } from '@/components/ui/textarea';
import Button from './ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import useUserData from '@/hooks/use-user-data';
import useLoader from '@/hooks/use-loader';


const formSchema = z.object({
    weight: z.string().min(1),
    receiver: z.string().min(10),
    pin: z.string().min(4),
    // description: z.string().min(3).max(150),
})

type LocationSettingsFormValues = z.infer<typeof formSchema>


const SendProductModal = () => {

    const form = useForm<LocationSettingsFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            weight: '',
            receiver: '',
            pin: '',
            // description: '',
        }
    })

    const sendProduct = useSendProduct();
    const productData = sendProduct.data;
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const user = useUserData()
    const loader = useLoader();



    const onSubmit = async (data: LocationSettingsFormValues) => {

        try {
            setLoading(true);
            loader.onOpen();

            if (productData && Number(data.weight) > productData?.weight) {
                toast.error(`Insufficient amount, you only have ${productData.weight} Kg`)
            loader.onClose()
            setLoading(false)
                return
            }
            await axios.post(`https://rumbu-admin.vercel.app/api/user/${encodeURIComponent(user.data?.phoneNumber!)}/transfer`, {
                ...data,
                productId: productData?.id
            });

            router.push('/storage');
            toast.success("product sent successfully!");

        } catch (e) {
            toast.error('Something went wrong!')
        } finally {
            loader.onClose()
            setLoading(false)
            sendProduct.onClose();
        }
    }



    return (
        <Modal
            isOpen={sendProduct.isOpen}
            onClose={sendProduct.onClose}
        >
            <div className='flex flex-col space-y-3 w-full'>
                <Heading
                    title="Send a product"
                    description="Send a product to family and friends"
                />
                <Separator />
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-8 w-full'
                    >
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField
                                control={form.control}
                                name='receiver'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Receiver Mobile</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                placeholder='Receiver mobile number'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='weight'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Weight in Kg</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                type='number'
                                                placeholder='Weight in Kilogram'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='pin'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Storage PIN</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                type='password'
                                                placeholder='Pin'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* <FormField
                            control={form.control}
                            name='description'
                            render={({ field }) => (
                                <FormItem className='col-span-2'>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            disabled={loading}
                                            placeholder='additional description'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}
                        </div>
                        <Button
                            disabled={loading}
                            type='submit'
                            className='ml-auto'
                        >
                            send
                        </Button>
                    </form>
                </Form>
            </div>
        </Modal>
    )
}

export default SendProductModal