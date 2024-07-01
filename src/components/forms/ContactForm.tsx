"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { type z } from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage, UncontrolledFormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/text-area"
import { Loader } from "lucide-react"
import { emailSchema } from "@/lib/validations/email"
import { sendEmail } from "@/app/_actions/email"
import { toast, useToast } from "../ui/use-toast"

type Inputs = z.infer<typeof emailSchema>

export function ContactForm() {
    const { toast } = useToast()
    const [isPending, startTransition] = React.useTransition()
    const form = useForm<Inputs>({
        resolver: zodResolver(emailSchema),
    })

    function onSubmit(data: Inputs) {
        startTransition(async () => {
            try {
                await sendEmail(data)
                form.reset()
                toast({
                    title: "Bedankt!",
                    description: "Ik neem zo snel mogelijk contact met je op.",
                    icon: <span className="text-2xl">👋</span>,
                })
            } catch (error) {
                error instanceof Error
                    ? toast({
                        title: "Er is iets misgegaan.",
                        description: error.message,
                        icon: "error",
                    })
                    : toast({
                        title: "Er is iets misgegaan.",
                        description: "Probeer het later opnieuw.",
                        icon: "error",
                    })
            }
        })
    }



    return (
        <Form {...form}>
            <form className="flex flex-col gap-3.5 w-full placeholder:text-[#e8e6e399]" onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)} >
                <div className='grid grid-cols-2 gap-3.5'>
                    <FormItem>
                        <FormControl>
                            <Input
                                aria-invalid={!!form.formState.errors.name}
                                placeholder="Naam" className='focus:outline-none h-11 bg-[#101010] rounded-[14px] text-base py-3 px-5 text-left flex items-center'
                                {...form.register("name")}
                            />
                        </FormControl>
                        <UncontrolledFormMessage message={form.formState.errors.name?.message} />
                    </FormItem>
                    <FormItem>
                        <FormControl>
                            <Input
                                aria-invalid={!!form.formState.errors.email}
                                placeholder="Email" className='focus:outline-none h-11 bg-[#101010] rounded-[14px] text-base py-3 px-5 text-left flex items-center'
                                {...form.register("email")}
                            />
                        </FormControl>
                        <UncontrolledFormMessage message={form.formState.errors.email?.message} />
                    </FormItem>
                </div>
                <FormItem>
                    <FormControl>
                        <Textarea
                            aria-invalid={!!form.formState.errors.message}
                            placeholder="Vertel me meer over je project" className='focus:outline-none min-h-44 max-h-[1000px] h-44 bg-[#101010] rounded-[14px] w-full text-base py-3 px-5 text-left flex items-center'
                            {...form.register("message")}
                        />
                    </FormControl>
                    <UncontrolledFormMessage message={form.formState.errors.message?.message} />
                </FormItem>
                <button disabled={isPending} className='py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:opacity-80 duration-300 ease-linear bg-purple rounded-[14px] text-base font-semibold'>
                    {isPending && (
                        <Loader
                            className="mr-2 h-4 w-4 animate-spin"
                            aria-hidden="true"
                        />
                    )}
                    Verstuur
                </button>
            </form>
        </Form >
    )
}