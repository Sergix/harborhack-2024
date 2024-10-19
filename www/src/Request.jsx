/* starter: https://ui.shadcn.com/docs/components/form */

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormLabel, FormDescription, FormItem, FormField } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const submitFormSchema = z.object({
    test: z.string()
})

export default function Submit() {
    const form = useForm({
        resolver: zodResolver(submitFormSchema),
        defaultValues: {
            test: 'hello world'
        }
    })

    function onSubmit(values) {
        console.log(values)
    }

    return (
        <>
            <h1>Request Help</h1>
            <div className='rounded-sm bg-slate-200 p-4 my-2'>
                {/* TODO: avatar image, name, address */}
                <div className="my-1">
                    <div className='flex flex-row align-middle'>
                        <Avatar>
                            <AvatarImage src='https://northsidecharleston.com/wp-content/uploads/2023/07/profile.jpg'/>
                            <AvatarFallback>PM</AvatarFallback>
                        </Avatar>
                        <p className="ml-2 leading-9">
                            Peyton McGinnis
                        </p>
                    </div>
                    <address className="my-2 text-sm">
                        8609 Woodland Walk<br/>
                        North Charleston, SC 29420
                    </address>
                </div>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                    <FormField name='test' control={form.control} render={({field}) => (
                        <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormDescription>Saved Address</FormDescription>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}>
                    </FormField>
                    <Button type='Submit'>Submit</Button>
                </form>
            </Form>
        </>
    )
}