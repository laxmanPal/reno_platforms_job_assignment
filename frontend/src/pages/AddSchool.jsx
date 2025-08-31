import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import { useForm } from "react-hook-form";
import { FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddSchool = () => {
    const { register, handleSubmit, formState: { errors }, setValue, clearErrors } = useForm();
    const [preview, setPreview] = useState(null);

    const onSubmit = async (data) => {
        console.log(data);
        alert("School added!");
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
            setValue("image", file, { shouldValidate: true });
            clearErrors("image");
        }
    };

    useEffect(() => {
        register("image", { required: "Image is required" });
    }, [register]);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-2 md:p-6">
            <div className="bg-white p-4 md:p-8 md:rounded-2xl shadow-lg w-full max-w-lg">
                {/* Header */}
                <div className="flex flex-col items-center mb-6">
                    <FaSchool className="text-indigo-600 text-4xl mb-2" />
                    <h2 className="text-2xl font-bold text-gray-800">Add School</h2>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <TextField
                        label="School Name"
                        variant="outlined"
                        fullWidth
                        {...register("name", { required: "School name is required" })}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />

                    <TextField
                        label="Address"
                        variant="outlined"
                        fullWidth
                        {...register("address", { required: "Address is required" })}
                        error={!!errors.address}
                        helperText={errors.address?.message}
                    />

                    <div className="flex gap-4">
                        <TextField
                            label="City"
                            variant="outlined"
                            fullWidth
                            {...register("city", { required: "City is required" })}
                            error={!!errors.city}
                            helperText={errors.city?.message}
                        />
                        <TextField
                            label="State"
                            variant="outlined"
                            fullWidth
                            {...register("state", { required: "State is required" })}
                            error={!!errors.state}
                            helperText={errors.state?.message}
                        />
                    </div>

                    <TextField
                        label="Contact"
                        variant="outlined"
                        type="number"
                        fullWidth
                        {...register("contact", {
                            required: { value: true, message: "Contact is required" },
                            pattern: { value: /^[0-9]+$/, message: "Contact must be a number" },
                            maxLength: { value: 10, message: "Contact cannot exceed 10 digits" },
                            minLength: { value: 10, message: "Contact must be 10 digits" }
                        })}
                        error={!!errors.contact}
                        helperText={errors.contact?.message}
                    />

                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        {...register("email_id", {
                            required: { value: true, message: "Email is required" },
                            pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" }
                        })}
                        error={!!errors.email_id}
                        helperText={errors.email_id?.message}
                    />

                    {/* File Upload */}
                    <div>
                        <label className="text-gray-700 font-medium mb-1 block">Upload School Image</label>
                        <Input
                            type="file"
                            onChange={handleImageChange}
                        />
                        {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                        {preview && (
                            <div className="mt-3 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        className="!bg-indigo-600 hover:!bg-indigo-700 !py-3 !rounded-xl !text-lg normal-case"
                    >
                        Submit
                    </Button>

                     <div className="flex items-center justify-center gap-4 text-indigo-600">
                                <Link
                                  to="/schools"
                                  className="hover:underline"
                                >
                                  School
                                </Link> | 
                                <Link
                                  to="/"
                                  className="hover:underline"
                                >
                                  Home
                                </Link>
                              </div>
                </form>
            </div>
        </div>
    );
};

export default AddSchool;
