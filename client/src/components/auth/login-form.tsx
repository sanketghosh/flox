// PACKAGES
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import * as loginUser from "@/actions/auth/login-user";
import { LoginSchema } from "@/schemas";

// COMPONENTS
import AuthCard from "@/components/auth/auth-card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type LoginFormProps = {
  isLoginCard?: boolean;
  toggleAuthCard?: () => void;
};

export default function LoginForm({
  isLoginCard,
  toggleAuthCard,
}: LoginFormProps) {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: loginUser.loginUser,

    onSuccess: async (data) => {
      toast.success(data.message);
      navigate("/ob-boarding");
    },

    onError: (data) => {
      toast.error(data.message);
    },
  });

  const handleFormSubmit = (values: z.infer<typeof LoginSchema>) => {
    mutation.mutate(values);
  };

  return (
    <AuthCard
      cardDescription="Welcome back to Flox ! Start from exactly where you left."
      isLoginCard={isLoginCard}
      toggleAuthCard={toggleAuthCard}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="space-y-4"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="carlahernan@mail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="1133f7ed9f1c2f7d1dae"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
}
