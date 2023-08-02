'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import Heading from "./heading";
import { Separator } from "./separator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from './input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import Button from './button';
import { Currency, User } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';


interface SettingFormProps {
    initialData: User;
    countries: Currency[];
}

const formSchema = z.object({
    country: z.string().min(1),
    city: z.string().min(1),
    address: z.string().min(3).max(150),
})

type LocationSettingsFormValues = z.infer<typeof formSchema>

const LocationSettingsForm: React.FC<SettingFormProps> = ({ initialData, countries }) => {

    const form = useForm<LocationSettingsFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            country: initialData.country || '',
            city: initialData.city || '',
            address: initialData.address || '',
        }
    })

    const [loading, setLoading] = useState(false);
    const router = useRouter();


    const onSubmit = async (data: LocationSettingsFormValues) => {

        const countryData = countries.find(country => country.id === data?.country)

        try {
            setLoading(true);

            await axios.post(`https://rumbu-admin.vercel.app/api/user/${encodeURIComponent(initialData.phoneNumber)}/location`, {
                ...data,
                country: countryData?.country,
                currency: countryData?.currency,
                code: countryData?.code,
                symbol: countryData?.symbol,
            });

            router.push('/dashboard');
            toast.success("info updated successfully!");

        } catch (e) {
            toast.error('Something went wrong!')
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className='flex flex-col space-y-3 w-full'>
            <Heading
                title="Locations Settings"
                description="Provide your location information"
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
                            name='country'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Select a country</FormLabel>
                                    <Select
                                        disabled={loading}
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue
                                                    defaultValue={field.value}
                                                    placeholder="Select a Country"
                                                />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <ScrollArea className="h-72 w-full rounded-md">
                                                {
                                                    countries.map((each) => (
                                                        <SelectItem
                                                            key={each.id}
                                                            value={each.id}
                                                        >
                                                            {each.country}
                                                        </SelectItem>
                                                    ))
                                                }
                                            </ScrollArea>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='city'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={loading}
                                            placeholder='City located'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='address'
                            render={({ field }) => (
                                <FormItem className='col-span-2'>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            disabled={loading}
                                            placeholder='shope address'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button
                        disabled={loading}
                        type='submit'
                        className='ml-auto'
                    >
                        Save changes
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default LocationSettingsForm