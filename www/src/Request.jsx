/* starter: https://ui.shadcn.com/docs/components/form */

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormLabel, FormDescription, FormItem, FormField } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Slider } from "@/components/ui/slider"
import { ProfileOverview } from '@/components/profile-overview'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState } from "react"
import NavBar from "./components/Navigation/NavBar"

const submitFormSchema = z.object({
    location: z.string(),
    foodstuff: z.array()
})

export default function Submit() {
    const [ location, setLocation ] = useState('1234 Joe Street ... ')

    const form = useForm({
        resolver: zodResolver(submitFormSchema),
        defaultValues: {
            location: 'address'
        }
    })

    function getLocation(value) {
        switch (value) {
            case 'address':
                setLocation('1234 Joe Street ... ')
                break
            case 'gps':
                setLocation('Retrieving location...')
                navigator.geolocation.getCurrentPosition((loc) => setLocation(`${loc.coords.latitude} / ${loc.coords.longitude}`))
                break
            default:
                setLocation('Select a location')
                break
        }
    }

    function onSubmit(values) {
        console.log(values)
    }

    return (
        <>
            <NavBar />
            <main className='px-4 mt-24 mb-8 phone-size'>
            {/* <h1>Request Help</h1> */}
            <ProfileOverview/>
            <Tabs defaultValue="request">
                <TabsList className='w-full'>
                    <TabsTrigger className='w-full' value="request">Request</TabsTrigger>
                    <TabsTrigger className='w-full' value="provide">Provide</TabsTrigger>
                </TabsList>
                <TabsContent value="request">
                    <p className='text-xs text-neutral-700 -mt-4 mb-4 pt-4 pb-3 px-3 bg-neutral-100 rounded-b-lg'>Send a public request for help</p>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 text-center bg-neutral-100 p-4 rounded-md'>
                        <FormField name='location' control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Location</FormLabel>
                                <Select onValueChange={getLocation} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a location to use" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="address">My saved address</SelectItem>
                                        <SelectItem value="gps">Current GPS location</SelectItem>
                                    </SelectContent>
                                </Select>
                                <p className='text-xs rounded-md bg-white text-black p-4'>{location}</p>
                            </FormItem>
                        )}></FormField>
                        <hr/>
                        <FormField name='essentials' control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Essentials</FormLabel>
                                <FormDescription>Do you have any critical needs?</FormDescription>
                                <ToggleGroup size={'lg'} variant='outline' type="multiple" onValueChange={field.onChange}>
                                    <ToggleGroupItem value="water" className='ToggleGroupItem'>Water</ToggleGroupItem>
                                    <ToggleGroupItem value="food" className='ToggleGroupItem'>Food</ToggleGroupItem>
                                    <ToggleGroupItem value="shelter" className='ToggleGroupItem'>Shelter</ToggleGroupItem>
                                </ToggleGroup>
                                <ToggleGroup size={'lg'} variant='outline' type="multiple" onValueChange={field.onChange}>
                                    <ToggleGroupItem value="medical" className='ToggleGroupItem'>Medical</ToggleGroupItem>
                                </ToggleGroup>
                            </FormItem>
                        )}></FormField>
                        <FormField name='medical' control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Medical</FormLabel>
                                <FormDescription>Do you need medical supplies?</FormDescription>
                                <ToggleGroup size={'lg'} variant='outline' type="multiple" onValueChange={field.onChange}>
                                    <ToggleGroupItem value="firstaid" className='ToggleGroupItem'>First Aid</ToggleGroupItem>
                                    <ToggleGroupItem value="oxygen" className='ToggleGroupItem'>Oxygen</ToggleGroupItem>
                                    <ToggleGroupItem value="insulin" className='ToggleGroupItem'>Insulin</ToggleGroupItem>
                                </ToggleGroup>
                                <ToggleGroup size={'lg'} variant='outline' type="multiple" onValueChange={field.onChange}>
                                    <ToggleGroupItem value="bandage" className='ToggleGroupItem'>Bandages</ToggleGroupItem>
                                    <ToggleGroupItem value="benadryl" className='ToggleGroupItem'>Benadryl</ToggleGroupItem>
                                    <ToggleGroupItem value="ibuprofen" className='ToggleGroupItem'>Ibuprofen</ToggleGroupItem>
                                </ToggleGroup>
                            </FormItem>
                        )}></FormField>
                        <FormField name='food' control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Food</FormLabel>
                                <FormDescription>Do you need food or water?</FormDescription>
                                <ToggleGroup size={'lg'} variant='outline' type="multiple" onValueChange={field.onChange}>
                                    <ToggleGroupItem value="water" className='ToggleGroupItem'>Water Bottles</ToggleGroupItem>
                                    <ToggleGroupItem value="infant" className='ToggleGroupItem'>Infant Formula</ToggleGroupItem>
                                </ToggleGroup>
                                <ToggleGroup size={'lg'} variant='outline' type="multiple" onValueChange={field.onChange}>
                                    <ToggleGroupItem value="radio" className='ToggleGroupItem'>Non-perishables</ToggleGroupItem>
                                </ToggleGroup>
                            </FormItem>
                        )}></FormField>
                        <FormField name='utilities' control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Utilities</FormLabel>
                                <FormDescription>Do you need a powered appliance?</FormDescription>
                                <ToggleGroup size={'lg'} variant='outline' type="multiple" onValueChange={field.onChange}>
                                    <ToggleGroupItem value="generator" className='ToggleGroupItem'>Generator</ToggleGroupItem>
                                    <ToggleGroupItem value="radio" className='ToggleGroupItem'>Radio</ToggleGroupItem>
                                    <ToggleGroupItem value="flashlight" className='ToggleGroupItem'>Flashlight</ToggleGroupItem>
                                </ToggleGroup>
                            </FormItem>
                        )}></FormField>
                        <FormField name='services' control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Services</FormLabel>
                                <FormDescription>Do you need someone to come help?</FormDescription>
                                <ToggleGroup size={'lg'} variant='outline' type="multiple" onValueChange={field.onChange}>
                                    <ToggleGroupItem value="fallentree" className='ToggleGroupItem'>Fallen Tree</ToggleGroupItem>
                                    <ToggleGroupItem value="tow" className='ToggleGroupItem'>Towing</ToggleGroupItem>
                                    <ToggleGroupItem value="debris" className='ToggleGroupItem'>Debris</ToggleGroupItem>
                                </ToggleGroup>
                                <ToggleGroup size={'lg'} variant='outline' type="multiple" onValueChange={field.onChange}>
                                    <ToggleGroupItem value="snow" className='ToggleGroupItem'>Snow Shoveling</ToggleGroupItem>
                                </ToggleGroup>
                            </FormItem>
                        )}></FormField>

                        <hr/>

                        <div className='space-y-4'>
                            <h2>How urgent is your request?</h2>
                            <p className='text-sm text-neutral-500'>From <i className="font-extralight">no rush</i> to <i className="font-extrabold">ASAP</i></p>
                            <Slider defaultValue={[25]} max={100} step={25} />
                        </div>

                        <div className='space-y-4'>
                            <h2>Do you have a picture?</h2>
                            <p className='text-sm text-neutral-500'>You're more likely to receive help if people can see it for themselves.</p>
                            <Input type='file'/>
                        </div>

                        <Button type='submit'>Submit</Button>
                    </form>
                </Form>
                </TabsContent>
                <TabsContent value="provide">
                    <p className='text-xs text-neutral-700 -mt-4 mb-4 pt-4 pb-3 px-3 bg-neutral-100 rounded-b-lg'>Offer to help others in need with your supplies or services</p>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 text-center bg-neutral-100 p-4 rounded-md'>
                        <FormField name='location' control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Location</FormLabel>
                                <Select onValueChange={getLocation} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a location to use" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="address">My saved address</SelectItem>
                                        <SelectItem value="gps">Current GPS location</SelectItem>
                                    </SelectContent>
                                </Select>
                                <p className='text-xs rounded-md bg-white text-black p-4'>{location}</p>
                            </FormItem>
                        )}></FormField>
                        <hr/>
                        <FormField name='medical' control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Medical</FormLabel>
                                <FormDescription>Do you have essential medical supplies?</FormDescription>
                                <ToggleGroup size={'lg'} variant='outline' type="multiple" onValueChange={field.onChange}>
                                    <ToggleGroupItem value="firstaid" className='ToggleGroupItem'>First Aid</ToggleGroupItem>
                                    <ToggleGroupItem value="oxygen" className='ToggleGroupItem'>Oxygen</ToggleGroupItem>
                                    <ToggleGroupItem value="insulin" className='ToggleGroupItem'>Insulin</ToggleGroupItem>
                                </ToggleGroup>
                                <ToggleGroup size={'lg'} variant='outline' type="multiple" onValueChange={field.onChange}>
                                    <ToggleGroupItem value="bandage" className='ToggleGroupItem'>Bandages</ToggleGroupItem>
                                    <ToggleGroupItem value="benadryl" className='ToggleGroupItem'>Benadryl</ToggleGroupItem>
                                    <ToggleGroupItem value="ibuprofen" className='ToggleGroupItem'>Ibuprofen</ToggleGroupItem>
                                </ToggleGroup>
                            </FormItem>
                        )}></FormField>
                        <FormField name='utilities' control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Utilities</FormLabel>
                                <FormDescription>Do you have a powered appliance?</FormDescription>
                                <ToggleGroup size={'lg'} variant='outline' type="multiple" onValueChange={field.onChange}>
                                    <ToggleGroupItem value="generator" className='ToggleGroupItem'>Generator</ToggleGroupItem>
                                    <ToggleGroupItem value="radio" className='ToggleGroupItem'>Radio</ToggleGroupItem>
                                    <ToggleGroupItem value="flashlight" className='ToggleGroupItem'>Flashlight</ToggleGroupItem>
                                </ToggleGroup>
                            </FormItem>
                        )}></FormField>
                        <FormField name='services' control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Services</FormLabel>
                                <FormDescription>What services can you provide?</FormDescription>
                                <ToggleGroup size={'lg'} variant='outline' type="multiple" onValueChange={field.onChange}>
                                    <ToggleGroupItem value="fallentree" className='ToggleGroupItem'>Tree Cutting</ToggleGroupItem>
                                    <ToggleGroupItem value="tow" className='ToggleGroupItem'>Towing</ToggleGroupItem>
                                    <ToggleGroupItem value="debris" className='ToggleGroupItem'>Debris Cleanup</ToggleGroupItem>
                                </ToggleGroup>
                                <ToggleGroup size={'lg'} variant='outline' type="multiple" onValueChange={field.onChange}>
                                    <ToggleGroupItem value="snow" className='ToggleGroupItem'>Snow Shoveling</ToggleGroupItem>
                                </ToggleGroup>
                            </FormItem>
                        )}></FormField>

                        <Button type='submit'>Submit</Button>
                    </form>
                </Form>
                </TabsContent>
            </Tabs>
            </main>
        </>
    )
}