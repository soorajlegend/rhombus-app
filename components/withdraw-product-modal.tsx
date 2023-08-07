"use client"

import React from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';


import Modal from './ui/modal';
import useWithdrawModal from '@/hooks/use-withdraw-modal';
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
    pin: z.string().min(4),
    // description: z.string().min(3).max(150),
})

type LocationSettingsFormValues = z.infer<typeof formSchema>

const WithdrawProductModal = () => {

    const form = useForm<LocationSettingsFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            weight: '',
            pin: '',
            // description: '',
        }
    })

    const withdrawProduct = useWithdrawModal();
    const productData = withdrawProduct.data;
    const user = useUserData()
    const router = useRouter();
    const loader = useLoader();
    
    const onSubmit = async (data: LocationSettingsFormValues) => {

        try {
            loader.onOpen();

            if (productData && Number(data.weight) > productData?.weight) {
                toast.error(`Insufficient amount, you only have ${productData.weight} Kg`)
            loader.onClose()
                return
            }
            await axios.post(`https://rumbu-admin.vercel.app/api/user/${encodeURIComponent(user.data?.phoneNumber!)}/withdrawal`, {
                ...data,
                storeItemId: productData?.id
            });

            router.push('/storage');
            toast.success("request sent successfully!");

        } catch (e) {
            toast.error('Something went wrong!')
        } finally {
            loader.onClose()
            withdrawProduct.onClose();
        }
    }


    return (
        <Modal
            isOpen={withdrawProduct.isOpen}
            onClose={withdrawProduct.onClose}
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
                                name='weight'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Weight in Kg</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loader.isOpen}
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
                                                disabled={loader.isOpen}
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
                                            disabled={loader.isOpen}
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
                            disabled={loader.isOpen}
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

export default WithdrawProductModal