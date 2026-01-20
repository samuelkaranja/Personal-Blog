type Props = {
  code: string;
};

const CodeBlock = ({ code }: Props) => {
  return (
    <pre className="bg-[#101622] rounded-xl p-4 text-sm overflow-x-auto text-blue-300">
      <code>{code}</code>
    </pre>
  );
};

export default CodeBlock;
