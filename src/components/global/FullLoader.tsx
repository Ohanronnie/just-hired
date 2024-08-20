export default function FullLoader({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) {
    return null;
  }
  return (
    <div className="mx-auto w-fit min-h-[50vh] h-full flex items-center">
      <div className="h-20 w-20 border-main border-2 border-t-transparent animate-spin rounded-full duration-1000 flex items-center justify-center">
        <span className="h-3 w-3 rounded-full bg-main-light animate-ping duration-1000"></span>
      </div>
    </div>
  );
}
