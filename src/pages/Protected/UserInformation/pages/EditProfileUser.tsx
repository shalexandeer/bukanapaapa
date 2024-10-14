import EditProfileForm from "../../../../components/forms/EditProfileForm/EditProfileForm";

const EditProfileUser = () => {
  return (
    <>
      <h1 className="font text-xl font-semibold text-textPrimaryDark lg:text-2xl">
        Edit Profile
      </h1>
      <div className="divider" />
      <EditProfileForm />
    </>
  );
};

export default EditProfileUser;
